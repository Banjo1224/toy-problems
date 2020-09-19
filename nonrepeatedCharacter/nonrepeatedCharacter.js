/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  return (string.length === 0 ? return null : string.length === 1 ? return string : () => {
    if ( string.length === 0 ) { return null } else if ( string.length === 1 ) { return string; };
    for ( var i = 1; i < string.length; i++ ) {
      if ( string[i] !== string[i - 1] ) {
        return string[i].toString();
      }
    }
  }
};

console.log(firstNonRepeatedCharacter('A'), '--> A');
console.log(firstNonRepeatedCharacter('ABA'), '--> B');
console.log(firstNonRepeatedCharacter('AACBDB'), '--> C');
console.log(firstNonRepeatedCharacter('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB'), '--> B');
console.log(firstNonRepeatedCharacter(""), '--> ""');
