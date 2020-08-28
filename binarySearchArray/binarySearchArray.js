/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var search = function (start, end) {
      var half = Math.floor((end - start) / 2 + start);
      if (array[half] === target) {
          return half;
      }
      if (array[half] > target) {
          if (half === 0) return null;
          return search(start, half);
      }
      if (array[half] < target) {
          if (half === array.length-1) return null;
          return search(half, end)
      }
  }
  return search(0, array.length);
};

// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index); // 3
// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null