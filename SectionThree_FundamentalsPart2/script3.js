// OUTERSECTION
// function declarations and function expressions
// --------------------------------------------------------------------

// INNERSECTION
// 1.

// PARTS
// 'birthYear' > parameter
// function declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

// PARTS
// '1991' > argument
const age1 = calcAge1(1991);
console.log(age1);

// INNERSECTION
// 2.

// PARTS
// 'birthYear' > parameter
// function declaration
function calcAge2(birthYear) {
  return 2037 - birthYear;
}

// PARTS
// '1991' > argument
const age2 = calcAge2(1991);
console.log(age2);

// INNERSECTION
// 3.

// PARTS
// anonymous function
// function expression
// passing an 'anonymous function as a value' to a 'variable'
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};

// PARTS
const age3 = calcAge3(1991);
console.log(age3);

// INNERSECTION
// 4.

// PARTS
// function expression
// passing a 'function as a value' to a 'variable'
const calcAge4 = function cA4(birthYear) {
  return 2037 - birthYear;
};

// PARTS
const age4 = calcAge4(1991);
console.log(age4);

// --------------------------------------------------------------------
