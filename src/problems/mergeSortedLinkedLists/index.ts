import { LinkedList } from '../../dataStructures/linkedList';

export const mergeSortedLinkedLists = (lists: LinkedList<number>[]): LinkedList<number> => {
    const currentItems = lists.slice();
    currentItems.map(i => console.log(1111, i.toString(), i.value))
    const findSmallestIndex = (): number => {
        let smallestNodeIndex = 0;

        for (let i = 1; i < currentItems.length; i++) {
            if (currentItems[i].value < currentItems[smallestNodeIndex].value) {
                smallestNodeIndex = i;
            }
        }

        return smallestNodeIndex;
    }

    let resultHead;


    while (currentItems.length) {
        const smallestIndex = findSmallestIndex();

        if (resultHead) {
            resultHead.add(currentItems[smallestIndex].value);
        } else {
            resultHead = new LinkedList(currentItems[smallestIndex].value);
        }

        const nextNode = currentItems[smallestIndex].next
        if (nextNode) {
            currentItems[smallestIndex] = nextNode;
        } else {
            currentItems.splice(smallestIndex, 1);
        }
    }

    return resultHead;
};