/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function (array) {
  //return original array if length is one
  if (array.length <= 1) {
    return array;
  }
  //declare pivot at last element
  var pivot = array.pop();
  var lesser = [];
  var greater = [];
  //iterate through array
  for (var i = 0; i < array.length; i++) {
    //if pivot is greater than array item, push to lesser
    if (array[i] <= pivot) {
      lesser.push(array[i]);
      //if pivot is smaller, push to greater
    } else {
      greater.push(array[i]);
    }
  }
  //recur through lesser and greater, return sorted array
  return quicksort(lesser).concat(pivot, quicksort(greater));
};

//quicksort([8, 7, 6, 5, 4, 3, 2, 1]);
//quicksort([6,4,3,5,7,2,3,4,7,3,2,57]);
//quicksort([1]);