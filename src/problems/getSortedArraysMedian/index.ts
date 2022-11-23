export const getSortedArraysMedian = (arrayA: number[], arrayB: number[]): number => {
    let prevItem;
    let nextItem;
    let nextItemIndex = 0;

    let arrAIndex = 0;
    let arrBIndex = 0;
    const medianIndex = (arrayA.length + arrayB.length - 1) / 2;

    while (nextItemIndex <= Math.ceil(medianIndex)) {
        prevItem = nextItem;
        
        if (arrayB[arrBIndex] === undefined || arrayA[arrAIndex] < arrayB[arrBIndex]) {
            nextItem = arrayA[arrAIndex];
            arrAIndex++;
        } else {
            nextItem = arrayB[arrBIndex];
            arrBIndex++;
        }

        nextItemIndex++;
    }

    if (prevItem === null) {
        return nextItem;
    }

    if (medianIndex % 1) {
        return (prevItem + nextItem) / 2;
    } else {
        return nextItem;
    }

    // this solution uses extra memory
    // while (arrayA.length > arrAIndex || arrayB.length > arrBIndex) {
    //     if (arrayB[arrBIndex] === undefined || arrayA[arrAIndex] < arrayB[arrBIndex]) {
    //         newArr.push(arrayA[arrAIndex]);
    //         arrAIndex++;
    //     } else {
    //         newArr.push(arrayB[arrBIndex]);
    //         arrBIndex++;
    //     }
    // }

    // const medianIndex = (newArr.length - 1) / 2;

    // if (medianIndex % 1) {
    //     return (newArr[Math.floor(medianIndex)] + newArr[Math.ceil(medianIndex)]) / 2;
    // } else {
    //     return newArr[medianIndex];
    // }
};
