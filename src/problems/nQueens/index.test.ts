import { nQueens } from './index';

describe('nQueens', () => {
    it('1', () => {
        expect(nQueens(1)).toEqual([['Q']]);
    });
    it('2', () => {
        expect(nQueens(2)).toEqual([]);
    });
    it('3', () => {
        expect(nQueens(4)).toEqual([[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]);
    });
    it('9', () => {
        const result = nQueens(9);
        expect(result).toBeTruthy();
    })
});
