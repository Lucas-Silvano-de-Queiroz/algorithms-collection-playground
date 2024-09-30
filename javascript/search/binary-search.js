/**
 * Performs a binary search on a sorted array to find the index of a specific target element.
 *
 * Binary search works by repeatedly dividing the search interval in half. It compares the middle
 * element of the array to the target. If they are not equal, the half in which the target cannot lie
 * is eliminated, and the search continues on the remaining half, until the target is found or the
 * array is exhausted.
 *
 * Time complexity: O(log n) where n is the number of elements in the array (due to halving).
 * Space complexity: O(1) (iterative version uses constant space).
 *
 * **Important:** The array must be sorted in ascending order for the binary search algorithm to work correctly.
 *
 * @param {number[]} arr - A sorted array of numbers where the search will be performed.
 * @param {number} target - The number being searched for in the array.
 * @returns {number} The index of the target element if found, or -1 if the target is not found.
 *
 * @example
 * // Example usage:
 * const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const target = 4;
 * const result = binarySearch(sortedArray, target);
 * console.log(result); // Output: 3
 *
 * const notFoundTarget = 10;
 * const resultNotFound = binarySearch(sortedArray, notFoundTarget);
 * console.log(resultNotFound); // Output: -1
 */
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // Calculate mid-point
        const guess = arr[mid];

        if (guess === target) {
            return mid;  // Return the index if target is found
        }

        if (guess > target) {
            high = mid - 1;  // Adjust high to narrow the search to the lower half
        }

        if (guess < target) {
            low = mid + 1;  // Adjust low to narrow the search to the upper half
        }
    }

    return -1;  // Return -1 if target is not found
}

/**
 * **OBS:** I believe it's more common in this algorithm to see the use of else, elseif, elif, etc. However, in this case, I preferred to use only if to reduce the cyclomatic complexity, even though it is low.
 */