/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/
/*
I: array of numbers
O: number that repeats itself the first time
E: empty array? no repeats? => null
C: ?

find numbers that repeat in list
find first repeated number
return that value (or null)

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  //declare output object for storage
  var output = {};
  //go through values in arr
  for (var i = 0; i < arr.length; i++) {
    //if value has been seen, add one to it's value
    if (output[arr[i]]) {
        output[arr[i]]++;
    } else {
      //else if value has not been seen, make new key in output object and add one to it's value
      output[arr[i]] = 1;
    }


  }
  //return first key with even value
  for (var key in output) {
    if (output[key] % 2 === 0) {
      return key;
    }
  }
  //else return null
  return null;
};


 var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 console.log(onlyEven); //  4
