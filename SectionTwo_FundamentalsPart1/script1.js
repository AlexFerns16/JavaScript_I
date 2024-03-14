let js = "amazing";

// OUTERSECTION
// explicitly mentioning 'console.log' to access the developers console
// output is displayed in developers console
// --------------------------------------------------------------------

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

// --------------------------------------------------------------------

// OUTERSECTION
// variable assignment
// --------------------------------------------------------------------

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// --------------------------------------------------------------------

// OUTERSECTION
// variable name conventions
// --------------------------------------------------------------------

// PARTS
// allowed
let first;

// PARTS
// allowed
let firstNamePerson;

// PARTS
// not allowed
// let 3years;

// PARTS
// not allowed
// let jonas&matilda;

// PARTS
// allowed
let jonas_matilda;
jonas_matilda = "JM";

// PARTS
// allowed
// specific use case for object oriented programming
// initial letter in 'caps'
let Person = "Jonas";

// PARTS
// not allowed
// 'new' is a reserved keyword in JS
// let new = 27;

// PARTS
// not allowed
// 'function' is a reserved keyword in JS
// let function = 27;

// PARTS
// allowed
// since the reserved keywords starts with '_' and '$'
// only '_' and '$' are allowed as prefix to the variable name in JS
let _function = 27;
let $new = 27;

// PARTS
// 'name' is also a reserved keyword in JS,
// but still allowed to be used
// it is a good practice to not use it as a variable name
let name = "Jonas";

// PARTS
// for constants that will never change
// there is a convention of writing it all in uppercase
// the color will be differently used for constants
let PI = 3.1415;
let E = 2.71;

// --------------------------------------------------------------------

// OUTERSECTION
// 7 Prmitive Data Types in JavaScript
// JavaScript has Dynamic Typing
// --------------------------------------------------------------------

// INNERSECTION
// 1. Number
// used for floating point number
let age = 23;
console.log(age);

// INNERSECTION
// 2. String
// used for text
let fName = "Jonas";
console.log(fName);

// INNERSECTION
// 3. Boolean
// used for taking decisions
let fullAge = true;
console.log(fullAge);
console.log(false);

// INNERSECTION
// 4. Undefined
// value taken by a variable that is not yet defined('empty value')
let children;
console.log(children);

// INNERSECTION
// 5. null
// also means empty value
let emptyValue = null;
console.log(emptyValue);

// INNERSECTION
// 6. Symbol (ES2015)
// value that is unique and cannot be changed
// will do it later

// INNERSECTION
// 7. BigInt (ES2020)
// larger integers that the 'Number' type can hold
// will do it later

// --------------------------------------------------------------------

// OUTERSECTION
// operators
// --------------------------------------------------------------------

// INNERSECTION
// 1.
// typeof
console.log(typeof true);
console.log(typeof fullAge);
console.log(typeof 23);
console.log(typeof "Jonas");
console.log(typeof fName);

// INNERSECTION
// 2.
// arithmatic - subtraction
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// INNERSECTION
// 3.
// arithmatic - multiplication
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// INNERSECTION
// 4.

// PARTS
// arithmatic - addition
const firstPerName = "Jonas";
const lastPerName = "Schmedtmann";

// PARTS
// string concatenation
console.log(firstPerName + " " + lastPerName);

// INNERSECTION
// 5.

// PARTS
// assignment
let x = 10 + 5;
console.log(x);

// PARTS
// x = x + 10
x += 10;
console.log(x);

// PARTS
// x = x * 4
x *= 4;
console.log(x);

// PARTS
// x = x + 1;
x++;
console.log(x);

// PARTS
// x = x - 1;
x--;
console.log(x);

// INNERSECTION
// 6.

// PARTS
// comparison
// it is used to produce boolean values

// PARTS
// greater than
console.log(ageJonas > ageSarah);

// PARTS
// less than
console.log(ageJonas < ageSarah);

// PARTS
// greater than or equal to
console.log(ageSarah >= 18);

// PARTS
// less than or equal to
console.log(ageJonas <= 18);

// PARTS
// example 1
const isFullAge = ageSarah >= 18;

// PARTS
// example 2
console.log(now - 1991 > now - 2018);
console.log(now - 1991 > now - 2018);

// --------------------------------------------------------------------

// OUTERSECTION
// operators precedence
// google: 'mdn operator precedence'
// --------------------------------------------------------------------

// PARTS
const nowYear = 2037;
const ageOfJonas = now - 1991;
const ageOfSarah = now - 2018;
console.log(ageOfJonas, ageOfSarah);

// PARTS
// 'precedence' is priority of operators
// operators with same precedence will execute on the basis of 'associativity'
// the '-' operator has a higher precedence over '>' operator
// since the '-' operator is used at two places in the same equation, it will follow the associativity of operator
// since the '-' operator has a 'left-to-right' precedence
// the result of 'nowYear - 1991' is executed first and then
// the result of 'nowYear - 2018' is executed next
// following the precedence the '>' operator is executed next
// with the result of 'nowYear - 1991' being the 'left operand' and the result of 'nowYear - 2018' being the 'right operand'
console.log(nowYear - 1991 > nowYear - 2018);

// PARTS
// arithmatic operators
// 'left-to-right' precedence
console.log(25 - 10 - 5);

// PARTS
// assignment operators
// 'right-to-left'
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

// PARTS
// '()' has a higher precedence
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// --------------------------------------------------------------------

// OUTERSECTION
// re-assigning a variable
// --------------------------------------------------------------------

// INNERSECTION
// 1.

// PARTS
let javascriptIsFun = true;
console.log(javascriptIsFun);

// PARTS
javascriptIsFun = "YES";
console.log(javascriptIsFun);

// INNERSECTION
// 2.

// PARTS
let year;
console.log(year); // value is 'undefined'
console.log(typeof year); // data type is 'undefined'

// PARTS
year = 1991;
console.log(year);
console.log(typeof year);

// INNERSECTION
// 3.
console.log(typeof null); // should be 'undefined' but shows 'object' (it's a bug)

// --------------------------------------------------------------------

// OUTERSECTION
// 3 different ways of declaring variables in JavaScript
// let, var, const
// we will learn more about this in section 7
// --------------------------------------------------------------------

// INNERSECTION
// 1.
// re-assigning a value to a variable
// mutating the variable
let agePer = 30;
agePer = 31;
console.log(agePer);

// INNERSECTION
// 2.

// PARTS
// creates a variable that we cannot re-assign
// a variable that cannot be mutated
const birthYear = 1991;
console.log(birthYear);

// PARTS
// Console: Uncaught TypeError: Assignment to constant variable.
// birthYear = 1990;

// PARTS
// Console: Uncaught SyntaxError: Missing initializer in const declaration
// missing initializer in 'const' declaration
// when declaring 'const' the value needs to be initialized, unlike 'let'
// const job;

// INNERSECTION
// 3.

// PARTS
// old way of defining the variables
var job = "programmer";

// PARTS
// mutating 'job' variable
job = "teacher";
console.log(job);

// INNERSECTION
// 4.
// undeclared variable
// this does not create a variable in the sculp
// it creates a property on the global object
// never write a variable like this, always properly declare a variable
lastName = "Schmedtmann";
console.log(lastName);

// INNERSECTION
// 5.

// SUBSECTION
// a. var
// can be re-declared
// can be re-defined
var abc = 10;
var abc;
abc = 20;

// SUBSECTION
// b. let
// cannot be re-declared
// but, can be re-defined
// ...
// ---------- uncomment code ----------
let xyz = 10;
// let xyz;
xyz = 20;
// ---------- uncomment code ----------

// SUBSECTION
// c. const
// cannot be re-declared
// cannot be re-defined
// syntax error
// ...
// ---------- uncomment code ----------
const uvw = 10;
// const uvw;
uvw = 20;
// ---------- uncomment code ----------

// INNERSECTION
// 6.

// SUBSECTION
// a. var
// doesn't have 'block scope'
// but, has function scope
var temp1 = 10;
console.log(temp1);
{
  var temp1 = 20;
  console.log(temp1);
}
console.log(temp1);

// SUBSECTION
// b. let
// has 'block scope'
// has function scope
let temp2 = 10;
console.log(temp2);
{
  let temp2 = 20;
  console.log(temp2);
}
console.log(temp2);

// SUBSECTION
// c. const
// has 'block scope'
// has function scope
const temp3 = 10;
console.log(temp3);
{
  const temp3 = 20;
  console.log(temp3);
}
console.log(temp3);

// --------------------------------------------------------------------

// OUTERSECTION
// strings
// --------------------------------------------------------------------

// PARTS
const firstPersonName = "Jonas";
const jobFirPer = "teacher";
const birthYearFirPer = 1991;
const currentYear = 2037;

// PARTS
// '(currentYear - birthYearFirPer)' > outputs an integer
// but when concatenated with a string, gets typecasted by itself to a string output
const jonasOne =
  "I'm " +
  firstPersonName +
  ", a " +
  (currentYear - birthYearFirPer) +
  " years old " +
  jobFirPer +
  "!";
console.log(jonasOne);

// PARTS
// ``(back-ticks) > used for template string / template literal
const jonasTwo = `I'm ${firstPersonName}, a ${
  currentYear - birthYearFirPer
} years old ${jobFirPer}!`;
console.log(jonasTwo);
const jonasThr = `I'm ${"Jonas"}, a ${46} years old ${"teacher"}!`;
console.log(jonasThr);

// PARTS
// can be used for regular string as well
console.log(`Just a regular string...`);

// PARTS
// string with multiple lines
console.log(
  "String with \n\
multiple \n\
lines"
);

// PARTS
// string with multiple lines with 'back-ticks'
console.log(`String with
multiple
lines`);

// --------------------------------------------------------------------

// OUTERSECTION
// descision making
// --------------------------------------------------------------------

// INNERSECTION
// 1.

// PARTS
const agePersonOne = 19;
const isOldEnoughOne = agePersonOne >= 18;

// PARTS
if (isOldEnoughOne) {
  console.log("Sarah can apply for driving license 😊");
}

// PARTS
if (agePersonOne >= 18) {
  console.log("Sarah can apply for driving license 😊");
}

// INNERSECTION
// 2.

// PARTS
const agePersonTwo = 15;
const isOldEnoughTwo = agePersonTwo >= 18;

// PARTS
if (isOldEnoughTwo) {
  console.log("Sarah can apply for driving license 😊");
} else {
  const yearsLeft = 18 - agePersonTwo;
  console.log(
    `Sarah needs to wait for another ${yearsLeft} years to apply for driving license 😊`
  );
}

// PARTS
if (agePersonTwo >= 18) {
  console.log("Sarah can apply for driving license 😊");
} else {
  const yearsLeft = 18 - agePersonTwo;
  console.log(
    `Sarah needs to wait for another ${yearsLeft} years to apply for driving license 😊`
  );
}

// INNERSECTION
// 3.
// variables declared with 'let' will not be accessible outside the block
const birthYearSecPer = 1998;

if (birthYearSecPer <= 2000) {
  let century = 20;
  console.log(century);
} else {
  let century = 21;
  console.log(century);
}

// INNERSECTION
// 4.
const birthYearThrPer = 2000;

if (birthYearThrPer < 2000) {
  let century = 20;
  console.log(century);
} else if (birthYearThrPer > 2000) {
  let century = 21;
  console.log(century);
} else {
  let century = 20.5;
  console.log(century);
}

// --------------------------------------------------------------------
