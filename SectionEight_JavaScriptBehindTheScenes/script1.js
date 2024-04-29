'use strict';

// global scope execution context
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // 'firstName' is accessible from the global execution context
  console.log(firstName);

  function printAge() {
    // 'firstName' is accessible from the global execution context
    // 'age' is accessible from the parent execution context 'calcAge'
    // 'birthYear' is accessible from the parent execution context 'calcAge'
    const output = `${firstName},You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // 'firstName' is accessible from the global execution context
      // 'str' has 'block scope'
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      // 'var' is not 'block scope', but only function scoped
      var millenial = true;
      console.log(millenial);

      // function 'add' is 'block scoped'
      function add(a, b) {
        return a + b;
      }
    }
    // 'str' has 'block scope'
    // console.log(str);
    // 'var' is not 'block scope', but only function scoped
    console.log(millenial);
    // function 'add' is 'block scoped'
    // add(2, 3);
  }
  printAge();

  return age;
}

// global variable
const firstName = 'Jonas';

// call to the function calcAge
calcAge(1991);

// cannot access 'age' globally
// as 'age' is declared inside 'calcAge'
// console.log(age);

// 'printAge' is not defined globally
// and therefore cannot be called from the global execution context
// as it is defined inside the 'calcAge' function
// it can only be called from within the 'calcAge' function
// printAge();
