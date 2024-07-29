function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals; // No need to merge if there's only one interval or none
    }

    // Step 1: Sort the intervals based on the start value
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize result array with the first interval
    const mergedIntervals = [intervals[0]];

    // Step 3: Iterate through intervals and merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        // Check for overlap by comparing end of last merged interval with start of current interval
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Overlapping intervals, merge them by taking the maximum end value
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Non-overlapping interval, add it to the result array
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [7, 9], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log(merged); // Output: [[1, 6], [7, 10], [15, 18]]
