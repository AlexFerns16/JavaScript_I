let country = 'Portugal';
let continent = 'Europe';
let population = ' 10';

console.log(country);
console.log(continent);
console.log(population);



// coding challenge 1 - part 1
// --------------------------------------------------------------------

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/


// test data 1
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
console.log(BMIMark1, BMIJohn1);

const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log(markHigherBMI1);


// test data 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);

// --------------------------------------------------------------------



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
