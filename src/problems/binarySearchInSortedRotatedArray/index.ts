export const getPivot = (array: number[]): number => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return i + 1;
        }
    }

    return 0;
}

export const binarySearchInSortedRotatedArray = (array: number[], value: number): number => {
    if (array.length === 1) {
        return array[0] === value ? 0 : -1;
    }

    const pivot = getPivot(array);
    const indexToSorted: {[index: number]: number} = {};
    for (let i = 0; i < array.length; i++) {
        const sortedIndex = (i + pivot) % array.length;
        indexToSorted[i] = sortedIndex;
    }

    let a = 0;
    let b = array.length - 1;

    if (array[indexToSorted[a]] > value || array[indexToSorted[b]] < value) {
        return -1;
    }

    while (a < b) {
        const middleIndex = Math.floor((b - a) / 2) + a;
        const sortedIndex = indexToSorted[middleIndex]
        let middleItem = array[sortedIndex];

        if (middleItem === value) {
            return sortedIndex;
        } else if (middleItem > value) {
            b = middleIndex - 1;
        } else {
            a = middleIndex + 1;
        }
    }

    return array[indexToSorted[a]] === value ? indexToSorted[a] : -1;
};
