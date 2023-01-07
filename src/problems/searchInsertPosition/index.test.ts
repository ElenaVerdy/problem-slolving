// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

import { searchInsertPosition } from './index';

describe('searchInsertPosition', () => {
    it('1', () => {
        expect(searchInsertPosition([1,3,5,6], 5)).toEqual(2);
    });
    it('2', () => {
        expect(searchInsertPosition([1,3,5,6], 2)).toEqual(1);
    });
    it('3', () => {
        expect(searchInsertPosition([1,3,5,6], 7)).toEqual(4);
    });
});
