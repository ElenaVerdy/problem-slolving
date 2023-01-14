export const getMaxSubarraySum = (arr: number[]): number => {
    let overallMax = 0;
    let currentMax = 0;

    arr.forEach(element => {
        currentMax += element;

        overallMax = Math.max(currentMax, overallMax);
        if (currentMax < 0) {
            currentMax = 0;
        }
    });

    return overallMax;
};