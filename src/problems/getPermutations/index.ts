const getArrayWithoutItem = (arr: number[], index: number): number[] => {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            result.push(arr[i]);
        }
    }

    return result;
}

export const getPermutations = (arr: number[]): number[][] => {
    if (arr.length === 1) return [arr];

    const result: number[][] = [];

    for (let i = 0; i < arr.length; i++) {
        const first = arr[i];
        const itemsLeft = getArrayWithoutItem(arr, i);

        const permutations = getPermutations(itemsLeft);
        permutations.forEach(item => result.push([first, ...item]))
    }

    return result
};