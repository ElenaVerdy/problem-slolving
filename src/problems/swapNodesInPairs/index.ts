import { LinkedList } from '../../dataStructures/linkedList';

export const swapNodesInPairs = (list: LinkedList<any>): LinkedList<any> => {
    let rest: LinkedList<any> | null = list;
    const result = list.next;
    let previous;
    if (!result) {
        return list;
    }

    while (rest) {
        const first = rest;
        const second = first.next;
        if (!second) {
            break;
        }
        rest = second.next || null;

        second.next = first;
        first.next = rest;
        if (previous) {
            previous.next = second;
        }

        previous = first;
    }

    return result;
};