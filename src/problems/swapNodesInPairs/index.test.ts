// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes, only nodes itself may be changed.

import { LinkedList } from '../../dataStructures/linkedList';
import { swapNodesInPairs } from './index';

describe('swapNodesInPairs', () => {
    it('1', () => {
        const head1 = LinkedList.fromArray([1,4,7,10,14]);

        expect(swapNodesInPairs(head1).toString()).toEqual('4,1,10,7,14')
    });
    it('2', () => {
        const head1 = LinkedList.fromArray([1,4]);

        expect(swapNodesInPairs(head1).toString()).toEqual('4,1')
    });
    it('3', () => {
        const head1 = LinkedList.fromArray([1]);

        expect(swapNodesInPairs(head1).toString()).toEqual('1')
    });
});
