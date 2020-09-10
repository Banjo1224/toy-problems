/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
// bad bad bad time complexity
// v scare

var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  // O: array of hands
  // I: number of rounds (advanced)
  // C: strings in array for rounds
  // E: ?
  // declare results
  var res = [];
  // declare valid plays
  var plays = ['R', 'P', 'S'];
  // loop through valid plays, index 1
  for (var i0 = 0; i0 < plays.length; i0++) {
    // loop through valid plays, index 2
    for (var i1 = 0; i1 < plays.length; i1++) {
      // loop through valid plays, index 3
      for (var i2 = 0; i2 < plays.length; i2++) {
        // declare string to push to results
        var play = '';
        // concat to string valid plays[index 1]
        // concat to string valid plays[index 2]
        // concat to string valid plays[index 3]
        play = plays[i0] + plays[i1] + plays[i2];
        // push string to results
        res.push(play);
      }
    }
  }
  // return results
  return res;
};

// rockPaperScissors();
