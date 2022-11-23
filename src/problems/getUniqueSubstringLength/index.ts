export const getUniqueSubstringLength = (str: string): number => {
    let set = new Set();
    let maxLength = 0;
    let currentLength = 0

    for (let i = 0; i < str.length; i ++) {
        const currentLetter = str[i]
        if (set.has(currentLetter)) {
            currentLength = 0;
            set = new Set();
        } else {
            currentLength++;
            set.add(currentLetter)
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
};
