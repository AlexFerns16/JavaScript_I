'use strict';

// regular functions vs arrow functions

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // arrow function doesn't get's it's own 'this' keyword
  // but it takes it from the parent scope
  // and the parent scope of the 'greet' method is the global scope
  // const jonas = { ... }, is not a code block, so it is not the scope
  // it is an object literal
  greet: () => console.log(`Hey, ${this.firstName}`),
};
// results in 'Hey, undefined'
jonas.greet();
// results in 'undefined'
console.log(this.firstName);
