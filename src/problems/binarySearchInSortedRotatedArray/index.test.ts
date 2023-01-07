// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

import { binarySearchInSortedRotatedArray, getPivot } from './index';

describe('binarySearchInSortedRotatedArray', () => {
    describe('getPivot', () => {
        it('1', () => expect(getPivot([6,8,1,2,3,4])).toEqual(2))
        it('2', () => expect(getPivot([1,2,3,4])).toEqual(0))
        it('3', () => expect(getPivot([5,6,8,1,2,3,4])).toEqual(3))
    });
    
    it('1', () => {
        expect(binarySearchInSortedRotatedArray([6,8,1,2,3,4], 1)).toEqual(2)
    });
    it('2', () => {
        expect(binarySearchInSortedRotatedArray([0,1,2,4,5,6,7], 1)).toEqual(1)
    });
    it('3', () => {
        expect(binarySearchInSortedRotatedArray([7,0,1,2,4,5,6], 6)).toEqual(6)
    });
    it('4', () => {
        expect(binarySearchInSortedRotatedArray([1,2,4,5,6,7,0], 0)).toEqual(6)
    });
    it('5', () => {
        expect(binarySearchInSortedRotatedArray([1,2,4,5,6,7,0], 1)).toEqual(0)
    });
    it('6', () => {
        expect(binarySearchInSortedRotatedArray([7], 7)).toEqual(0)
    });
    it('7', () => {
        expect(binarySearchInSortedRotatedArray([9], 7)).toEqual(-1)
    });
    it('8', () => {
        expect(binarySearchInSortedRotatedArray([1,2,4,5,6,7,0], 9)).toEqual(-1)
    });
    it('9', () => {
        expect(binarySearchInSortedRotatedArray([1,2,4,5,6,7,0], -20)).toEqual(-1)
    });
    it('10', () => {
        expect(binarySearchInSortedRotatedArray([1,2,4,6,7,0], 5)).toEqual(-1)
    });
    it('11', () => {
        expect(binarySearchInSortedRotatedArray([4,5,6,7,0,1,2], 0)).toEqual(4)
    });
});
