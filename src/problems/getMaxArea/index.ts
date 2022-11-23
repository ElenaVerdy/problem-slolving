export const getMaxArea = (heights: number[]): number => {
    let startIndex = 0;
    let endIndex = heights.length - 1;
    let maxArea = 0;

    while (startIndex < endIndex) {
        maxArea = Math.max(maxArea, Math.min(heights[startIndex], heights[endIndex]) * (endIndex - startIndex));

        if (heights[startIndex] > heights[endIndex]) {
            endIndex--;
        } else {
            startIndex++;
        }
    }

    return maxArea;
};
