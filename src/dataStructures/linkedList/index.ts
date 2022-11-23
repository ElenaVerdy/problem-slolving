export class LinkedList<T> {
    next: LinkedList<T> | null = null;
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    static fromArray<T>(array: T[]): LinkedList<T> {
        if (!array.length) {
            throw new Error('Linked list should contain atleast one node');
        }

        const result = new LinkedList(array[0]);
        let curr = result;

        for (let i = 1; i < array.length; i++) {
            curr.next = new LinkedList(array[i]);
            curr = curr.next;
        }

        return result;
    }

    getLastItem(): LinkedList<T> {
        let current: LinkedList<T> = this;

        while(current.next) current = current.next;

        return current;
    }

    add(value: T){
        this.getLastItem().next = new LinkedList(value);

        return this;
    }

    getElementByIndex(index: number): LinkedList<T> {
        let current: LinkedList<T> = this;

        for (let i = 1; i < index; i++) {
            if (!current.next) {
                throw new Error('There is not element with such index: ' + index)
            }
            current = current.next;
        }

        return current;
    }

    toString() {
        let arr: T[] = [];

        let current: LinkedList<T> | null = this;
        while (current) {
            arr.push(current.value);

            current = current.next;
        }

        return arr.join();
    }

    getLength() {
        let current: LinkedList<T> | null = this;
        let length = 1;

        while (current) {
            current = current.next;

            if (current) {
                length++;
            }
        }

        return length;
    }
}