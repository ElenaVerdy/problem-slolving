export const removeElementModifyingArray = (array: number[], value: number): number[] => {
    let finalLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            array[finalLength] = array[i]
            finalLength++;
        }
    }

    array.length = finalLength;

    return array;
};