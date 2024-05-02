'use strict';

/* variables */

console.log(me);
// console.log(job);
// console.log(year);

// 'TDZ' > Temporal Dead Zone
// variables declared with 'var' are hoisted to the value of 'undefined' in 'TDZ'
var me = 'Jonas';

// variables declared with 'let' are not hoisted
// cannot be accessed in 'TDZ' > Temporal Dead Zone
// 'TDZ' is the zone before the variable is declared
let job = 'teacher';

// variables declared with 'const' are not hoisted
// cannot be accessed in 'TDZ' > Temporal Dead Zone
// 'TDZ' is the zone before the variable is declared
const year = 1991;

/* functions */

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
