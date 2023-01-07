import { removeValueFromArray } from './index';

describe('removeValueFromArray', () => {
    it('1', () => {
        const array = [1,3,4,5,2,4,1,2];

        expect(removeValueFromArray(array, 1)).toEqual(6);
        expect(array).toStrictEqual([3,4,5,2,4,2])
    });
    it('2', () => {
        const array = [1,1,1,1,1,1];

        expect(removeValueFromArray(array, 1)).toEqual(0);
        expect(array).toStrictEqual([])
    });
    it('3', () => {
        const array = [];

        expect(removeValueFromArray(array, 1)).toEqual(0);
        expect(array).toStrictEqual([])
    });
});
