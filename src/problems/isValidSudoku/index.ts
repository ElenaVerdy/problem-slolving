import { DigitStr } from "../../types";

type SudokuCell = DigitStr | '.';
type SudokuBoardSector = SudokuCell[]
export type SudokuBoard = SudokuBoardSector[]

const isValidSector = (row: SudokuBoardSector): boolean => {
    const existingValues = new Set<SudokuCell>();

    return row.every(item => {
        if (item === '.') return true;
        if (existingValues.has(item)) return false;
        existingValues.add(item);
        return true;
    })
}

const getColumn = (board: SudokuBoard, index): SudokuBoardSector => {
    return board.map(item => item[index]);
}

const getSquareSection = (board: SudokuBoard, index): SudokuBoardSector => {
    const result: SudokuBoardSector = []

    const firstColumnIndex = (index % 3) * 3;
    const firstRowIndex = Math.floor(index / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            result.push(board[j + firstRowIndex][i + firstColumnIndex])
        }
    }

    return result;
}

export const isValidSudoku = (board: SudokuBoard): boolean => {
    for (let i = 0; i < 9; i++) {
        if (!isValidSector(board[i])) {
            return false
        }

        if (!isValidSector(getColumn(board, i))) {
            return false;
        }

        if (!isValidSector(getSquareSection(board, i))) {
            return false;
        }
    }

    return true;
};