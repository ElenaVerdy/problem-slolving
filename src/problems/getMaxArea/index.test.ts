// https://leetcode.com/problems/container-with-most-water/
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

import { getMaxArea } from './index';

describe('getMaxArea', () => {
    it('1', () => expect(getMaxArea([1,8,6,2,5,4,8,3,7])).toStrictEqual(49));
    it('2', () => expect(getMaxArea([1,15,6,2,5,4,15,3,7])).toStrictEqual(75));
    it('2', () => expect(getMaxArea([1,1])).toStrictEqual(1));
});
