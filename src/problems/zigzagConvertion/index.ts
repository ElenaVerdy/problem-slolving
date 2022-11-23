export const zigzagConvertion = (str: string, rowsCount: number): string => {
    const rows: string[][] = new Array(rowsCount).fill(null).map(() => [])
    let isDirectionDown = true;
    let movesInDirectionMade = 0;
    const maxMovesInDirection = rowsCount - 2;

    for (let i = 0; i < str.length; i++) {
        const rowIndex = isDirectionDown ? movesInDirectionMade : rowsCount - 1 - movesInDirectionMade
        
        rows[rowIndex].push(str[i]);

        if (movesInDirectionMade === maxMovesInDirection) {
            movesInDirectionMade = 0;
            isDirectionDown = !isDirectionDown;
        } else {
            movesInDirectionMade++;
        }
    }

    return rows.flat().join('');
};
