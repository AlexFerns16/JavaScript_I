'use strict';

// Scoping in Practice

// global scope execution context
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // 'firstName' is accessible from the global execution context
  console.log(firstName);

  function printAge() {
    // 'firstName' is accessible from the global execution context
    // 'age' is accessible from the parent execution context 'calcAge'
    // 'birthYear' is accessible from the parent execution context 'calcAge'
    let output = `${firstName},You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // block scope variable
      // creating a NEW variable with the same name as outer scope's variable
      const firstName = 'Steve';

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

      // we did not create (declare) a new variable here
      // but have simply re-defined an existing variable
      // whose updated value could be accessed out of the block scope
      output = 'NEW OUTPUT';

      // a new varible created (declared) within block scope
      // will not be accessible out of the block scope
      // const output = 'VERY NEW OUTPUT';
    }

    // 'str' has 'block scope'
    // console.log(str);

    // 'var' is not 'block scope', but only function scoped
    console.log(millenial);

    // function 'add' is 'block scoped'
    // add(2, 3);

    // 'NEW OUTPUT'
    console.log(output);
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
