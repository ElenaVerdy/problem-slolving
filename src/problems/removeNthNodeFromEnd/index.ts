import { LinkedList } from "../../dataStructures/linkedList";

export const removeNthNodeFromEnd = (list: LinkedList<number>, index: number): LinkedList<number> | null => {
    const listLength = list.getLength();

    if (index === listLength) {
        return list.next;
    }

    const prevItem = list.getElementByIndex(listLength - index);

    prevItem.next = prevItem.next?.next || null;

    return list;
};
