type Cell = 'Q' | '.' | '*';
type Row = Cell[];
type Board = Row[];
type Coords = {
    column: number,
    row: number;
};

const getEmptyBoard = (n: number): Board => {
    const result: Board = [];

    for (let i = 0; i < n; i++) {
        result.push(new Array(n).fill('.'));
    }

    return result;
}

const getAllPossibleMoves = (board: Board): Coords[] => {
    const result: Coords[] = [];

    board.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            if (cell === '.') {
                result.push({column: columnIndex, row: rowIndex});
            }
        })
    })

    return result;
}

const copyBoard = (board: Board): Board => {
    return board.map(row => row.slice());
}

const prepareBoards = (board: Board): string[][] => {
    const board1: string[] = [];
    const board2: string[] = [];
    const n = board.length;

    for (let i = 0; i < board.length; i++) {
        let str1 = '';
        let str2 = '';

        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j] === 'Q' ? 'Q' : '.';

            str1 += cell;
            str2 = cell + str2;
        }
        board1.push(str1);
        board2.push(str2);
    }

    return [board1, board2]
}

const placeEmptySpace = (board: Board, coord: Coords): void => {
    if (board[coord.row]?.[coord.column] === '.') {
        board[coord.row][coord.column] = '*';
    }
}

const placeQueen = (board: Board, coord: Coords): Board => {
    board[coord.row][coord.column] = 'Q';

    for (let i = 0; i < board.length; i++) {
        placeEmptySpace(board, {row: coord.row, column: i})
        placeEmptySpace(board, {row: i, column: coord.column})

        placeEmptySpace(board, {row: coord.row + i, column: coord.column + i});
        placeEmptySpace(board, {row: coord.row + i, column: coord.column - i});
        placeEmptySpace(board, {row: coord.row - i, column: coord.column + i});
        placeEmptySpace(board, {row: coord.row - i, column: coord.column - i});
    }

    return board;
}

const getBoardKeys = (board: Board): string[] => {
    let str1 = '';
    let str2 = '';
    const n = board.length;

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const queenIndex = row.indexOf('Q');
        const reverseIndex = queenIndex === -1 ? -1 : n - queenIndex - 1

        str1 += queenIndex;
        str2 += reverseIndex;
    }

    return [str1, str2]
}

const getMinEmptyRowsAndColumns = (possibleMoves: Coords[]): number => {
    const columnsSet = new Set<number>();
    const rowsSet = new Set<number>();

    possibleMoves.forEach(coords => {
        columnsSet.add(coords.column)
        rowsSet.add(coords.row)
    })

    return Math.min(columnsSet.size, rowsSet.size);
}

export const nQueens = (n: number): string[][] => {
    if (n === 1) {
        return [['Q']]
    }

    let a = Date.now();

    const result: string[][] = [];
    const processedSet = new Set<string>();
    const emptyBoard = getEmptyBoard(n);

    const helper = (currentBoard: Board, queensToPlace: number) => {
        const [key1, key2] = getBoardKeys(currentBoard);

        if (processedSet.has(key1) || processedSet.has(key2)) {
            return;
        }

        processedSet.add(key1);
        processedSet.add(key2);

        const isSimmetrical = key1 === key2;

        if (queensToPlace === 0) {
            const [board1, board2] = prepareBoards(currentBoard);
            result.push(board1);
            if (!isSimmetrical) {
                result.push(board2);
            }

            return;
        }

        const possibleMoves = getAllPossibleMoves(currentBoard);

        if (possibleMoves.length < queensToPlace || getMinEmptyRowsAndColumns(possibleMoves) < queensToPlace) {
            return;
        }

        possibleMoves.forEach(coord => {
            helper(placeQueen(copyBoard(currentBoard), coord), queensToPlace - 1)
        });
    }

    helper(emptyBoard, n)

    return result;
};