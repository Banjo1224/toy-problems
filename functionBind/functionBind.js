/*
 * function bind():
 *
 * example 1:
 */
var alice = {
  name: 'alice',
  shout: function () {
    alert(this.name);
  }
}
/* var boundShout = bind(alice.shout, alice);
* boundShout(); // alerts 'alice'
* boundShout = bind(alice.shout, {name: 'bob'});
* boundShout(); // alerts 'bob'
*
* example 2:
*
* var func = function(a, b){ return a + b };
* var boundFunc = bind(func, null, 'foo');
* var result = boundFunc('bar');
* result === 'foobar'; // true
*
*/

var bind = function (call, context, ...args) {
  // call = function to call
  // context = this binding
  // args = arguments to apply to function

  return function (...boundArgs) {
    var applyArgs = args.concat(boundArgs);
    return call.apply(context, applyArgs)
  }
};

var func = function (a, b) { return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true

/*
* Function.prototype.bind:
*
* example 1:
*
* var alice = {
*   name: 'alice',
*   shout: function(){
*     alert(this.name);
*   }
* }
* var boundShout = alice.shout.bind(alice);
* boundShout(); // alerts 'alice'
* boundShout = alice.shout.bind({name: 'bob'});
* boundShout(); // alerts 'bob'
*
* example 2:
*
* var func = function(a, b){ return a + b };
* var boundFunc = func.bind(null, 'foo');
* var result = boundFunc('bar');
* result === 'foobar'; // true
*
*/

Function.prototype.bind = function (context, ...args) {
  var temp = this;
  return function (...boundArgs) {
    var applyArgs = args.concat(boundArgs)
    return temp.apply(context, applyArgs);
  }
};


var alice = {
  name: 'alice',
  shout: function () {
    alert(this.name);
  }
}
var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({ name: 'bob' });
boundShout(); // alerts 'bob'

var func = function func(a, b) {
  return a + b;
};
    var context = null;
    var boundFunc = bind(func, context, 'wow '); // "bind" 'wow ' => the first argument (a)
    var result1 = boundFunc('dawg'); // first call to boundFunc with b='dawg'
    console.log('result1: ', result1);
    var result2 = boundFunc('man'); // second call to boundFunc with b='man'
    console.log('result2: ', result2);