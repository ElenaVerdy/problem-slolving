// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1),
// which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such
// that each substring contains exactly one unique digit. Then for each substring, say the number
// of digits, then say the digit. Finally, concatenate every said digit.

import { countAndSay } from './index';

describe('countAndSay', () => {
    it('1', () => {
        expect(countAndSay(1)).toEqual('1');
    });
    it('2', () => {
        expect(countAndSay(4)).toEqual('1211');
    });
    it('3', () => {
        expect(countAndSay(5)).toEqual('111221');
    });
    it('4', () => {
        expect(countAndSay(6)).toEqual('312211');
    });
});
