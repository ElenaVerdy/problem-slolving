type ReturnArray = [number, number];
export const firstAndLastIndexInSortedArray = (array: number[], target: number): ReturnArray => {
    const result: ReturnArray = [-1, -1];
    let isOnTarget = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            if (isOnTarget) {
                result[1] = i;
            } else {
                result[0] = i;
                result[1] = i;
                isOnTarget = true;
            }
        } else if (array[i] > target) {
            continue;
        }
    }

    return result;
};
