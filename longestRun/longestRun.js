/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  /**
   * O: Array with start and end of the first longest run
   * I: A string of an arbitrary length
   * C: ?
   * E: null string, no repeats, multiple repeats
   */
  var count = 1;
  var start = 0;
  var biggest = 0;
  var lastStart = 0;
  var end = 0;

  for ( var i = 0; i < string.length; i++ ) {
    if ( string[i] === string[i - 1] ) {
      count ++;

      if( count > biggest) {
        biggest = count;
        start = lastStart;
        end = i;
      }
    } else {
      count = 1;
      lastStart = i;
    }
  }
  return [start, end];
};


// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var testArr = [];
for (var i = 0; i < 1000; i++) {
  testArr.push(randomString(10000));
}
var count = 0;
for (var test of testArr) {
  var temp = longestRun(test);
  if ( temp[1] - temp[0] > count ){
    count = temp[1] - temp[0];
  }
}
console.log('Largest count was: ', count)

// console.log(longestRun("abbbcc")) // [1, 3]
// console.log(longestRun("aabbc"))  // [0, 1]
// console.log(longestRun("abcd"))   // [0, 0]
// console.log(longestRun(""))       // null
