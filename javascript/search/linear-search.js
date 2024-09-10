/**
 * Searches for a specific element in an array using the linear search algorithm.
 *
 * Linear search iterates over the array elements one by one, comparing each element
 * to the target. If the target is found, it returns the index of the first occurrence.
 * If the target is not found, it returns -1.
 *
 * Time complexity: O(n) where n is the number of elements in the array.
 * Space complexity: O(1).
 *
 * @param {Array} arr - The array to search through. Can contain elements of any type.
 * @param {*} target - The element to search for in the array. Can be of any type.
 * @returns {number} The index of the target element if found, or -1 if the target is not in the array.
 *
 * @example
 * // Example usage:
 * const numbers = [3, 1, 4, 1, 5, 9, 2];
 * const target = 5;
 * const result = linearSearch(numbers, target);
 * console.log(result); // Output: 4
 *
 * const targetNotFound = 7;
 * const resultNotFound = linearSearch(numbers, targetNotFound);
 * console.log(resultNotFound); // Output: -1
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {  // Strict comparison
            return i;  // Returns the index of the found element
        }
    }
    return -1;  // Returns -1 if the element is not found
}
