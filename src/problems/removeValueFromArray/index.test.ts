// Given an array nums and a value val, remove all instances of that value in-place
// and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the
// input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond
// the new length.

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
