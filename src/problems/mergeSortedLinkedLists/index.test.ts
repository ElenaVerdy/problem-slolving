// Merge k sorted linked lists and return it as one sorted list.
// Analyze and describe its complexity.

import { LinkedList } from '../../dataStructures/linkedList';
import { mergeSortedLinkedLists } from './index';

describe('mergeSortedLinkedLists', () => {
    it('1', () => {
        const head1 = LinkedList.fromArray([1, 4, 7, 10, 14]);
        const head2 = LinkedList.fromArray([2, 5, 8, 11, 15, 20]);
        const head3 = LinkedList.fromArray([3, 6, 9, 12, 13]);

        expect(mergeSortedLinkedLists([head1, head2, head3]).toString()).toStrictEqual('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20')
    });
    it('2', () => {
        const head1 = LinkedList.fromArray([1, 4, 7, 10, 14]);
        expect(mergeSortedLinkedLists([head1]).toString()).toStrictEqual('1,4,7,10,14')
    });
    it('3', () => {
        const head1 = new LinkedList(1);
        const head2 = new LinkedList(2);
        const head3 = new LinkedList(3);

        expect(mergeSortedLinkedLists([head1, head2, head3]).toString()).toStrictEqual('1,2,3')
    });
});
