// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.

import { getMaxSubarraySum } from './index';

describe('getMaxSubarraySum', () => {
    it('1', () => {
        expect(getMaxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });
    it('2', () => {
        expect(getMaxSubarraySum([20,1,-3,4,-1,2,1,-5,4])).toEqual(24);
    });
    it('3', () => {
        expect(getMaxSubarraySum([1,3,-2,7,8,-20,0])).toEqual(17);
    });
});
