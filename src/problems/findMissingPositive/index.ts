export const findMissingPositive = (array: number[]): number => {
    const set = new Set(array);

    for (let i = 1; i < array.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }

    return array.length;
};