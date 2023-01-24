function quicksort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];
  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}


module.exports = [quicksort];
