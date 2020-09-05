/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function (array) {
  var res = 0;
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    if (res < 0) {
      res = 0;
    }
    temp = res;
    res += array[i];
  }
  if (temp > res) {
    return temp;
  }

  return res;
};


console.log('[1, 2, 3] -> 6 ', sumArray([1, 2, 3]))

console.log('[1, 2, 3, -4] -> 6 ', sumArray([1, 2, 3, -4]))

console.log('[10, -11, 11]) -> 11 ', sumArray([10, -11, 11]))

console.log('[1, 2, 3, -4, 5] -> 7 ', sumArray([1, 2, 3, -4, 5]))