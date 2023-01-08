export const getNextValue = (str: string): string => {
    let result = '';
    let currentCount = 1;
    let currentChar = str[0];
    for (let i = 1; i < str.length; i++) {
        if (currentChar === str[i]) {
            currentCount++;
        } else {
            result += `${currentCount}${currentChar}`;
            currentCount = 1;
            currentChar = str[i];
        }
    }
    result += `${currentCount}${currentChar}`;

    return result;
}

export const countAndSay = (index: number): string => {
    let currentValue = '1';

    for (let i = 1; i < index; i++) {
        currentValue = getNextValue(currentValue);
    }

    return currentValue;
};
