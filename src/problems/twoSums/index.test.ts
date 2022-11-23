// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

import { twoSums } from './index';

describe('twoSums', () => {
    it('1', () => expect(twoSums([1, 3, 4, 6, 7, 9], 4)).toStrictEqual([1, 3]));
    it('2', () => expect(twoSums([3, 6, 5, 7, 8, 11], 11)).toStrictEqual([3, 8]));
    it('3', () => expect(twoSums([3, 6, 5, 7, 8, 11, 9], 1)).toStrictEqual(null));
});
