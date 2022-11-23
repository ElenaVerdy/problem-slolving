export const getLongestPalindromSubstr = (str: string): string => {
    for (let i = 0; i < str.length; i++) {
        const currStrLength = str.length - i;

        for (let j = 0; j < i; j++) {
            const currentSubstr = str.substring(j, j + currStrLength);

            if (isPalindrom(currentSubstr)) return currentSubstr;
        }
    }

    return ''

    function isPalindrom(str) {
        return str.split('').reverse().join('') === str;
    }
};
