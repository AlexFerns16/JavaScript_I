'use strict';

// the this keyword

// global scope 'this' keyword > window
console.log(this);

// get's it's own 'this' keyword
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

// the arrow function uses the 'this' keyword of the global scope
// or the 'this' keyword of the parent scope
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

// 'jonas' object
// 'this' keyword points to 'jonas' object
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
console.log(jonas);

// 'matilda' object
const matilda = {
  year: 2017,
};
// method borrowing
matilda.calcAge = jonas.calcAge;
// the 'this' keyword points to 'matilda'
// the 'this' keyword always points to the object that is calling the method
matilda.calcAge();

// type 'f' in the console for results
// it will display the function
// method is copied to 'f' > method borrowing
const f = jonas.calcAge;
// this will result into 'undefined'
// because it just a regular function call
// as it is not attached to the object
// f();
