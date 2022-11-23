export const twoSums = (array: number[], sum: number): [number, number] | null => {
    const dict = {};
    array.forEach(item => dict[item] = dict[item] ? dict[item]++ : 1);

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const target = sum - item;

        if (dict[target]) {
            return [item, target]
        }
    }

    return null
};
