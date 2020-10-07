/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  var store = {'bracket': 0, 'curly': 0, 'square': 0}
  for ( var i = 0; i < input.length; i++ ) {
    if (input[i] === '(') {
      store['bracket']++;
    }
    if (input[i] === ')') {
      store['bracket']--;
    }
    if (input[i] === '[') {
      store['square']++;
    }
    if (input[i] === ']') {
      store['square']--;
    }
    if (input[i] === '{') {
      store['curly']++;
    }
    if (input[i] === '}') {
      store['curly']--;
    }
  }
  if (store['bracket'] === 0 && store['curly'] === 0 && store['square'] === 0) {
    return true;
  }
  return false;
};


// console.log(balancedParens('[](){}')); //t
// console.log(balancedParens('()](){}')); //f
// console.log(balancedParens('[](){}{}{}{}{}')); //t
// console.log(balancedParens('[]( woahhhhh ){}')); //t
// console.log(balancedParens('[](as;kldfhj)){}')); //f
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[](){}'));
