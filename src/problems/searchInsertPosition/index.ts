export const searchInsertPosition = (array: number[], target: number): number => {
    for (let i = 0; i < array.length; i++) {
        if (target <= array[i]) {
            return i;
        }
    }
    return array.length;
};