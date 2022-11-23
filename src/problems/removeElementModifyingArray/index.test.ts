import { removeElementModifyingArray } from './index';

describe('removeElementModifyingArray', () => {
    it('1', () => expect(removeElementModifyingArray([1,4,5,2,4,6,4], 4)).toStrictEqual([1,5,2,6]));
    it('2', () => expect(removeElementModifyingArray([1,4,5,1,3,2,5,1], 1)).toStrictEqual([4,5,3,2,5]));
    it('3', () => expect(removeElementModifyingArray([1,1,1,1], 1)).toStrictEqual([]));
    it('4', () => expect(removeElementModifyingArray([], 1)).toStrictEqual([]));
});
