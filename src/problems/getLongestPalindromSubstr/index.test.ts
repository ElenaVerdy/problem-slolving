// Given a string s, find the longest palindromic substring in s. You may assume
// that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: "cbbd"
// Output: "bb"

import { getLongestPalindromSubstr } from './index';

describe('getLongestPalindromSubstr', () => {
    it('1', () => expect(getLongestPalindromSubstr('babad')).toStrictEqual('bab'));
    it('2', () => expect(getLongestPalindromSubstr('cbbd')).toStrictEqual('bb'));
    it('2', () => expect(getLongestPalindromSubstr('casghjklkjhdbsdsbdasdfghjklkjhgsdssds')).toStrictEqual('ghjklkjhg'));
});
