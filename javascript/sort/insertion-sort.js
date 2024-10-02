/**
 * Sorts an array using the insertion sort algorithm.
 *
 * This algorithm works by iterating through the array, starting from the second element.
 * For each element, it compares it with the elements before it and shifts those that are greater
 * to the right, creating space to insert the current element in its correct sorted position.
 *
 * Time complexity: O(n^2) in the worst and average cases. O(n) in the best case (already sorted array).
 * Space complexity: O(1) (in-place sorting).
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * // Example usage:
 * const unsortedArray = [5, 2, 9, 1, 5, 6];
 * const sortedArray = insertionSort(unsortedArray);
 * console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
 */
function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

      let key = arr[i];
      let j = i - 1;

      // Shift elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = key;
  }

  return arr;
}
