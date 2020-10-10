/**
 * Write a function that, given an email address, will return true if the
 * email address is valid and false if it's not.
 *
 * don't worry too much about passing _all_ the tests. 100% perfect email
 * validation is complicated. Almost all websites don't even follow the
 * specification perfectly but get through as many as you can.
 */

/**
  * usage example:
  * validateEmail("me@vctr.me"); // should return `true`
  * validateEmail("email@123.123.123.123"); // should return `true`
  * validateEmail("email@domain.name"); // should return `true`
  * validateEmail(".email@domain.com"); // should return `false`
  * validateEmail("email@domain.com."); // should return `false`
  */

var validateEmail = function(address) {
  var str = address.split('');
  if (str.indexOf('.') === 0 || str[str.length - 1] === '.') {
    return false;
  }
  var atSign = 0
  str.map(char => { if (char === '@') atSign++;  })
  if (atSign > 1 || atSign === 0) {
    return false;
  }
  if (str[str.length - 4] !== '.') {
    return false;
  }
  return true;
};



console.log(validateEmail('bbates377@gmail.com'), '--> true');
console.log(validateEmail('.bbates@gmail.com'), '--> false');
console.log(validateEmail('b.bates@gmail.com'), '--> true');
console.log(validateEmail('bbates@gmail.com.'), '--> false');
console.log(validateEmail('bbatesgmail.com'), '--> false');
console.log(validateEmail('bbates@gmail'), '--> false');
console.log(validateEmail('bbates@@gmail.com'), '--> false');