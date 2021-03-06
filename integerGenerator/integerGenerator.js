/**
 * Given a function which produces a random integer in the range 1 to 5, write
 * a function which produces a random integer in the range 1 to 7.
 */

// produces random integers in the range of [1,5] (inclusive)
var random1to5 = function (toNum = 5) {
  // NOTE: You're allowed to use `Math.random()` in your solution.
  // TODO: you're code here!

  return Math.floor(Math.random() * toNum) + 1;
};

// produces random integers in the range [1,7] (inclusive)
var random1to7 = function () {
  // NOTE: Don't use `Math.random()` directly.
  // TODO:  your code here!
  return random1to5(7);
};

console.log(random1to7())