/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

function powerSet(str) {
  var resultArray = [""];

  function addToResult(prefix, str) {
    if(str.length === 0){return [""];}

    for (var i = 0; i < str.length; i++) {
      resultArray.push(prefix + str[i]);
      addToResult(prefix + str[i], str.slice(i + 1));
    }
  }

  addToResult('', str);
  return resultArray;
}

console.log(powerSet('jump'), '==> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"')