/*
 * function bind():
 *
 * example 1:
 */
var alice = {
  name: 'alice',
  shout: function(){
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

var bind = function(call, context) {
  var con = context;
  var func = call;

  console.log(func)

  var temp = {};

  Object.assign(temp, con);
  temp.func = func;
  console.log(temp);

  return temp.func();
};

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

Function.prototype.bind = function(context) {
  var temp = context;
  return this.call(temp);

};


