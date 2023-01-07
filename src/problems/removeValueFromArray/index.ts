export const removeValueFromArray = (array: number[], value: number) => {
    let resultArrayLength = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== value) {
            array[resultArrayLength] = array[i];
            resultArrayLength++;
        }
    }

    array.length = resultArrayLength;

    return resultArrayLength;
};