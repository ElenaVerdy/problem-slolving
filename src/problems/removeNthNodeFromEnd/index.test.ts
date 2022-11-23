// Given the head of a linked list, remove the nth node from the end of the list and return its head.

import { LinkedList } from '../../dataStructures/linkedList';
import { removeNthNodeFromEnd } from './index';

describe('removeNthNodeFromEnd', () => {
    it('1', () => {
        const head = new LinkedList(1);
        head.add(2).add(3).add(4).add(5);

        expect(removeNthNodeFromEnd(head, 2)?.toString()).toStrictEqual('1,2,3,5')
    });
    it('2', () => {
        const head = new LinkedList(1);
        head.add(2).add(3).add(4).add(5);

        expect(removeNthNodeFromEnd(head, 1)?.toString()).toStrictEqual('1,2,3,4')
    });
    it('3', () => {
        const head = new LinkedList(1);
        head.add(2).add(3).add(4).add(5);

        expect(removeNthNodeFromEnd(head, 5)?.toString()).toStrictEqual('2,3,4,5')
    });
});
