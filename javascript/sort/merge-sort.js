/**
 * Sorts an array using the merge sort algorithm.
 *
 * Merge sort is a divide-and-conquer algorithm that splits the array into two halves, 
 * recursively sorts each half, and then merges the two sorted halves to produce the final sorted array.
 *
 * Time complexity: O(n log n) in all cases (worst, average, and best).
 * Space complexity: O(n) due to the auxiliary array used during the merge process.
 *
 * @param {number[]} list - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * // Example usage:
 * const unsortedArray = [5, 2, 9, 1, 5, 6];
 * const sortedArray = mergeSort(unsortedArray);
 * console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
 */
function mergeSort(list) {
    // Base case: if the list has 1 or 0 elements, it's already sorted
    if (list.length <= 1) {
      return list;
    }
  
    // Split the array into two halves
    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
  
    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  /**
   * Merges two sorted arrays into one sorted array.
   *
   * @param {number[]} left - The left half of the array.
   * @param {number[]} right - The right half of the array.
   * @returns {number[]} The merged sorted array.
   */
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both halves and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  