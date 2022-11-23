// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should
// be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

import { getSortedArraysMedian } from './index';

describe('getSortedArraysMedian', () => {
    it('1', () => expect(getSortedArraysMedian([1, 3], [2])).toStrictEqual(2));
    it('2', () => expect(getSortedArraysMedian([1, 2], [3, 4])).toStrictEqual(2.5));
    it('3', () => expect(getSortedArraysMedian([1,3,5,7], [2,4,6])).toStrictEqual(4));
    it('3', () => expect(getSortedArraysMedian([1,3,5,7,20,22], [2,4,21])).toStrictEqual(5));
    it('4', () => expect(getSortedArraysMedian([1], [])).toStrictEqual(1));
});
