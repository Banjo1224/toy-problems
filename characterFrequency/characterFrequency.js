/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var result = [];
  var holding = {};
  var input = string.split('');
  for (var letter of input) {
      if (holding[letter] === undefined) {
          holding[letter] = 1;
      } else holding[letter]++;
  }
  for (var letter in holding) {
      var temp = [letter, holding[letter]];
      result.push(temp);
  }
  return result;
};

// console.log(characterFrequency('mississippi')) /*===
//  *  [
//  *    ['i', 4],
//  *    ['s', 4],
//  *    ['p', 2],
//  *    ['m', 1]
//  *  ]
//  *
//  *       :: Example2 ::
//  */
// console.log(characterFrequency('miaaiaaippi')) /*===
//  *  [
//  *    ['a', 4],
//  *    ['i', 4],
//  *    ['p', 2],
//  *    ['m', 1]
//  *  ]
//  *
//  *       :: Example3 ::
//  */
// console.log(characterFrequency('mmmaaaiiibbb'))
// /*
//  *  [
//  *    ['a', 3],
//  *    ['b', 3],
//  *    ['i', 3],
//  *    ['m', 3]
//  *  ]
//  */