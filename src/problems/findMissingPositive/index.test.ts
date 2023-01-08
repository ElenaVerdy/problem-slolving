// Given an unsorted integer array, find the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.
// ---
// comment: there is no way to do that if you don't modify the array, use O(1) space and have O(n) time complexity.
// People on leetcode agree

import { findMissingPositive } from './index';

describe('findMissingPositive', () => {
    it('1', () => {
        expect(findMissingPositive([1,2,0])).toEqual(3);
    });
    it('2', () => {
        expect(findMissingPositive([3,4,-1,1])).toEqual(2);
    });
    it('3', () => {
        expect(findMissingPositive([7,8,9,11,12])).toEqual(1);
    });
});
