// coding challenge 2 - part 1
// --------------------------------------------------------------------

/* 

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 

*/

// test data 3
const massMark3 = 95;
const heightMark3 = 1.88;
const massJohn3 = 85;
const heightJohn3 = 1.76;

const BMIMark3 = massMark3 / heightMark3 ** 2;
const BMIJohn3 = massJohn3 / (heightJohn3 * heightJohn3);
console.log(BMIMark3, BMIJohn3);

if (BMIMark3 > BMIJohn3) {
  console.log(`Mark's BMI ${BMIMark3} is higher than John's BMI ${BMIJohn3}`);
} else {
  console.log(`John's BMI ${BMIJohn3} is higher than Mark's BMI ${BMIMark3}`);
}

// test data 4
const massMark4 = 78;
const heightMark4 = 1.69;
const massJohn4 = 92;
const heightJohn4 = 1.95;

const BMIMark4 = massMark4 / heightMark4 ** 2;
const BMIJohn4 = massJohn4 / (heightJohn4 * heightJohn4);
console.log(BMIMark4, BMIJohn4);

if (BMIMark4 > BMIJohn4) {
  console.log(`Mark's BMI ${BMIMark4} is higher than John's BMI ${BMIJohn4}`);
} else {
  console.log(`John's BMI ${BMIJohn4} is higher than Mark's BMI ${BMIMark4}`);
}

// --------------------------------------------------------------------
