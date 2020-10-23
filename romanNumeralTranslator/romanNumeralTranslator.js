
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(input) {
// TODO: Implement me!
/**
 * declare result int
 * if input ! string, => null
 * iterate over string
 * convert each letter to number, add to result
 * IF letter = I, & next ! I or null/undefined, subtract one
 */

  var res = 0;
  if (typeof(input) !== 'String') return null;
  input.split('').map(letter => {
    if (letter === 'I') {
      if (input[input.indexOf(letter) + 1] !== 'I') {
        res--;
      } else {
        res++;
      }
    } else {
      res += DIGIT_VALUES[letter];
    }
  })
  return res;
};

console.log(translateRomanNumeral(7));
