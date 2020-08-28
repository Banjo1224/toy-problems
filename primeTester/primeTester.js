/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return null;
  }
  // TODO: return true if n is prime, false otherwise
  var divisors = [];
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        divisors.push(i);
        //console.log(divisors);
      }
    }
    if (divisors.length === 0) {
      return true;
    }
    return false;
};

var primeSieve = function (start, end) {
  var primes = [];
  for (var i = start - 1; i < end + 1; i++) {
    if (primeTester(i)) primes.push(i);
  }
  return primes;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

// console.log(primeSieve(1, 10))


