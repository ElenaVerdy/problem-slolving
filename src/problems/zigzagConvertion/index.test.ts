// https://leetcode.com/problems/zigzag-conversion/solution/
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

import { zigzagConvertion } from './index';

describe('zigzagConvertion', () => {
    it('1', () => expect(zigzagConvertion('PAYPALISHIRING', 3)).toStrictEqual('PAHNAPLSIIGYIR'));
    it('1', () => expect(zigzagConvertion('PAYPALISHIRING', 4)).toStrictEqual('PINALSIGYAHRPI'));
});
