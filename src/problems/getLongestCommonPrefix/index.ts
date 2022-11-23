export const getLongestCommonPrefix = (words: string[]): string => {
    let prefix = '';
    let prefixLength = 0;
    let currentChar = ''

    while (true) {
        for (let i = 0; i < words.length; i++) {
            if (!words[i]) {
                return ''
            }

            let currentWorkChar = words[i][prefixLength];

            if (i === 0) {
                currentChar = currentWorkChar;
            }
            if (currentChar === currentWorkChar) {
                continue;
            } else {
                return prefix;
            }

        }

        prefix += currentChar
        prefixLength++
    }
};
