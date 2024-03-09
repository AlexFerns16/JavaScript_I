
// conditional operator (ternary operator)

// --------------------------------------------------------------------

// defining a variable
const age = 15;


// conditional statement
age >=18 ? console.log('I like to drive') : console.log('I like to cycle');


// using a variable
const commute1 = age >= 18 ? 'drive' : 'cycle';
console.log(commute1);


// using if--else
let commute2;

if (age >= 18) commute2 = 'drive';
else commute2 = 'cycle';

console.log(commute2);


// using template literal
console.log(`I like to ${age >= 18 ? 'drive' : 'cycle'}, `, 'template literal');

// --------------------------------------------------------------------
