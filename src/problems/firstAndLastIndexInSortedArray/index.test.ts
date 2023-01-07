// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

import { firstAndLastIndexInSortedArray } from './index';

describe('firstAndLastIndexInSortedArray', () => {
    it('1', () => {
        expect(firstAndLastIndexInSortedArray([5,7,7,8,8,10], 8)).toEqual([3,4]);
    });
    it('2', () => {
        expect(firstAndLastIndexInSortedArray([5,7,7,8,8,10], 6)).toEqual([-1,-1]);
    });
    it('3', () => {
        expect(firstAndLastIndexInSortedArray([], 0)).toEqual([-1,-1]);
    });
});
