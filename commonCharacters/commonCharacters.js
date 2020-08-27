/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// TODO: Your code here!
/*
I: two strings
O: one string of common characters
C: No spaces, no repeats
E: no common chars?
*/
// create object for storage

// iterate through both strings

// if a letter is not a key in obj, add key and set val to 1
// if letter is already a key, add one to val
// iterate through object keys
// for every key with val > 1, concat to end of result string
// return result

var commonCharacters = function(string1, string2) {
  var store = {};
  var str = string1.concat(string2);
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var thisChar = str.charAt(i);
    if (str.charAt(i) !== " ") {
      if (store[str.charAt(i)]) {
        store[str.charAt(i)]++;
      } else {
        store[str.charAt(i)] = 1;
      }
    }
  }
  for (var char in store){
    if (store[char] > 1) {
      result += char;
    }
  }
  return result;
};

commonCharacters('aeiou ', 'laksjoi weoanlkvalkjs');