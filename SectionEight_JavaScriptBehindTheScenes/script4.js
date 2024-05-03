'use strict';

// regular functions vs arrow functions

// if we declare variables with 'var'
// it creates properties on the global object
// 'firstName' is found on the window object
// this is one of the reasons why we shouldn't use 'var'
var firstName = 'Matilda';

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
  // this is why we shouldn't use the arrow function as a method
  //   greet: () => {
  //     // 'this' > 'window'
  //     console.log(this);
  //     console.log(`Hey, ${this.firstName}`);
  //   },
  greet: function () {
    // 'this' > 'jonas' object
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};

// results in 'Hey, undefined'
jonas.greet();

// the 'this' keyword it refers to is in the global scope
// 'this' > 'window'
console.log(this.firstName);
console.log(this);
