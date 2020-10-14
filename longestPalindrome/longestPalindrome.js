/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (s) {
  if (!s || s.length <= 1) {
    return s
  }
  let longest = s.substring(0, 1)
  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i)
    if (temp.length > longest.length) {
      longest = temp
    }
    temp = expand(s, i, i + 1)
    if (temp.length > longest.length) {
      longest = temp
    }
  }
  return longest
}

const expand = (s, begin, end) => {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--
    end++
  }
  return s.substring(begin + 1, end)
};


console.log(longestPalindrome("My dad is a racecar athlete"))