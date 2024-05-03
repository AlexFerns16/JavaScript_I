'use strict';

/* variables */
/* ------------------------------------------------------------------- */

console.log(me);
// console.log(job);
// console.log(year);

// 'TDZ' > Temporal Dead Zone
// 'TDZ' is the zone before the declaration of the variable
// 'me' is called before declaration
// variables declared with 'var' are hoisted to the value of 'undefined' in 'TDZ'
var me = 'Jonas';

// variables declared with 'let' are not hoisted
// cannot be accessed in 'TDZ' > Temporal Dead Zone
// 'TDZ' is the zone before the variable is declared
// 'job' is called before declaration
let job = 'teacher';

// variables declared with 'const' are not hoisted
// cannot be accessed in 'TDZ' > Temporal Dead Zone
// 'TDZ' is the zone before the variable is declared
// 'year' is called before declaration
const year = 1991;

/* functions */
/* ------------------------------------------------------------------- */

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// ----------------------------------------------------------------------
// function declaration
// can be called before defining
function addDecl(a, b) {
  return a + b;
}

// ----------------------------------------------------------------------
// function expression
// cannot be called before defining as it is defined with 'const'
// const addExpr = function (a, b) {
//   return a + b;
// };

// any variable defined with 'var' is hoisted to 'undefined'
// function name is viewed as 'undefined(a, b)', which does not exists
// therefore, it cannot be called before defining
var addExpr = function (a, b) {
  return a + b;
};

// ----------------------------------------------------------------------
// function arrow
// cannot be called before defining as it is defined with 'const'
// const addArrow = (a, b) => a + b;

// any variable defined with 'var' is hoisted to 'undefined'
// function name is viewed as 'undefined(a, b)', which does not exists
// therefore, it cannot be called before defining
var addArrow = (a, b) => a + b;

// example
// ----------------------------------------------------------------------

// even when 'numProducts' is defined to '10'
// using it before defining it would yield the value as 'undefined'
// which would result in boolean 'false'
// '!false > true' which would execute the 'deleteShoppingCart()'
// hence this would result in a big mistake
console.log(numProducts);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

// variables created with 'var' would create properties on a global window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
