/**
 * Performs a linear search on an array to find a specific element.
 *
 * @param {Array} arr - The array where the search will be performed.
 * @param {*} target - The element being searched for in the array.
 * @returns {number} - The index of the found element, or -1 if the element is not found.
 *
 * @example
 * // Usage example:
 * const numbers = [3, 1, 4, 1, 5, 9, 2];
 * const target = 5;
 * const result = linearSearch(numbers, target); // Returns 4
 */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {  // Strict comparison
            return i;  // Returns the index of the found element
        }
    }
    return -1;  // Returns -1 if the element is not found
}
