/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // declare result array
  var result = {};
  // recursive function to find unique strings
  var anagram = (a, string) => {
    // base case: if string is empty, push current anagram to result
    if (string === '') {
    result[a] = 1
    }
    // loop through string
    for (var i = 0; i < string.length; i++) {
      // run anagram on previous anagram plus one more letter from string
        // also pass through the remaining letters in the string
        // each run should take one letter out of word at a time
      anagram(a + string[i], string.slice(0, i) + string.slice(i + 1));
    }
  }
//   initial run for anagram function
  anagram('', string);
  // return result array
  return Object.keys(result);
};

console.log(
allAnagrams('abc'),
allAnagrams('test'),
allAnagrams('whoop')
);
