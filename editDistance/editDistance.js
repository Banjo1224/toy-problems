// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  // O: Number of operations required to transform one string to another
  // I: Two strings
  // C: Two arbitrary strings, least amount of moves to do it (recursion?)
  // E: Strings cannot be transformed? Null strings? very long strings?

  if(str1.length == 0) return str2.length;
  if(str2.length == 0) return str1.length;

  var resultsTable = [];

  for (var i = 0; i <= str2.length; i++) {
    resultsTable[i] = [i];
  }

  for (var j = 0; j < str1.length; j++) {
    resultsTable[0][j] = j;
  }

  for (var i = 1; i <= str2.length; i++) {
    for (var j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        resultsTable[i][j] = resultsTable[i - 1][j - 1];
      } else {
        resultsTable[i][j] = Math.min(
          resultsTable[i - 1][j - 1] + 1,
          Math.min(
            resultsTable[i][j-1] + 1,
            resultsTable[i - 1][j] + 1
          ));
      }
    }
  }
  return resultsTable[str2.length][str1.length];
}

console.log(editDistance('Saturday', "Sunday"))

// 'abcd' --> 'dcba'

/*    a  b  c  d              replace insert
    d 1  2  3  4              delete  here!
    c 2  3  4  5
    b 3  4  5  6
    a 4  5  6  7   --> answer = 7


  'Saturday' --> 'Sunday'

      "  S  a  t  u  r  d  a  y
    " 0  1  2  3  4  5  6  7  8
    S 1  0  1  2  3  4  5  6  7
    u 2  1  1  2  3  4  5  6  7
    n 3  2  2  2  3  4  5  6  7
    d 4  3  3  3  3  4  5  6  7
    a 5  4  4  4  4  5  6  7  8
    y 6  5  5  5  5  6  6  7  8  answer = 8
*/
