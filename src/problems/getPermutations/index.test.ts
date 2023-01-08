// Given a collection of distinct integers, return all possible permutations

import { getPermutations } from './index';

describe('getPermutations', () => {
    it('1', () => {
        const result = getPermutations([1,2,3]);
        expect(result).toStrictEqual([
            [1,2,3],
            [1,3,2],
            [2,1,3],
            [2,3,1],
            [3,1,2],
            [3,2,1]
        ]);
    });
});
