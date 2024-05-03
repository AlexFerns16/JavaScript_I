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

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    // we know that, a 'function' that is attached to an 'object' is called a 'method'
    // and the method is called using the object name
    // the 'this' keyword inside a method thus refers to the same object
    // 'isMillenial()' is just a regular function call inside of a method
    // hence as the rule states, inside a regular function call the keyword 'this' must be 'undefined'
    // since the function 'isMillenial()' is not attached to the 'object'
    isMillenial();
  },
  // arrow function doesn't get's it's own 'this' keyword
  // but it takes it from the parent scope
  // and the parent scope of the 'greet' method is the global scope
  // const jonas = { ... }, is not a code block, so it is not the scope
  // it is an object literal
  // this is why we shouldn't use the arrow function as a method
  greet: () => {
    // 'this' > 'window'
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
  //   greet: function () {
  //     // 'this' > 'jonas' object
  //     console.log(this);
  //     console.log(`Hey, ${this.firstName}`);
  //   },
};

// results in 'Hey, undefined'
jonas.greet();
jonas.calcAge();

// the 'this' keyword it refers to is in the global scope
// 'this' > 'window'
// console.log(this.firstName);
// console.log(this);
