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



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  /*
  I: two strings
  O: one string of common characters
  C: No spaces, no repeats
  E: no common chars?
*/
  // create object for storage
  var store = {};
  // iterate through both strings
  var str = string1 + string2;
  str.replaceAll("\\s", ""); // removes white spaces
  console.log(str);
  // if a letter is not a key in obj, add key and set val to 1
  // if letter is already a key, add one to val
  // iterate through object keys
  // for every key with val > 1, concat to end of result string
  // return result
};

commonCharacters('aeiou ', 'laksjoi weoanlkv;alkjs');