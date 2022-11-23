// Given a sorted array nums, remove the duplicates in-place such that each element
// appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the
// input array in-place with O(1) extra memory.

export const removeDuplicatesFromSortedArray = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    }

    let lastNumber = array[0];
    let finalLength = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== lastNumber) {
            array[finalLength] = array[i];
            finalLength++;
            lastNumber = array[i];
        }
    }

    array.length = finalLength;

    return array;
};