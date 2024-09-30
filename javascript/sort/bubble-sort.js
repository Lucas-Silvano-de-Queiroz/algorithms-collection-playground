/**
 * Sorts an array using the bubble sort algorithm.
 *
 * Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * This process is repeated until the list is sorted. It is named for how larger elements "bubble" to the top of the list.
 *
 * Time complexity: O(n^2) in the worst and average cases. O(n) in the best case (already sorted array).
 * Space complexity: O(1) (in-place sorting).
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * // Example usage:
 * const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
 * const sortedArray = bubbleSort(unsortedArray);
 * console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
 */
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    // Outer loop to traverse the entire array
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
  
      // Inner loop to compare adjacent elements
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1] if they are in the wrong order
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true; // Mark that a swap happened
        }
      }
  
      // If no swaps happened in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }
  
    return arr;
  }
  