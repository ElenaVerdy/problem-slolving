import { removeDuplicatesFromSortedArray } from './index';

describe('removeDuplicatesFromSortedArray', () => {
    it('1', () => expect(removeDuplicatesFromSortedArray([1, 1,2,3,3,4,5])).toStrictEqual([1,2,3,4,5]));
    it('2', () => expect(removeDuplicatesFromSortedArray([1])).toStrictEqual([1]));
    it('3', () => expect(removeDuplicatesFromSortedArray([1, 1,1,1,1])).toStrictEqual([1]));
    it('3', () => expect(removeDuplicatesFromSortedArray([1,1,3,3,3,4,4,4,5,5,5,6,7,8,8,9,10])).toStrictEqual([1,3,4,5,6,7,8,9,10]));
});
