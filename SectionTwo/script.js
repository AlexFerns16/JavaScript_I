let js = 'amazing';


// explicitly mentioning 'console.log' to access the developers console
// output is displayed in developers console
// --------------------------------------------------------------------
console.log(40 + 8 + 23 - 10)
console.log('Jonas');
console.log(23);
// --------------------------------------------------------------------


// variable assignment
// --------------------------------------------------------------------
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// --------------------------------------------------------------------


// variable name conventions
// --------------------------------------------------------------------

// allowed
let first;

// allowed
let firstNamePerson;

// not allowed
// let 3years;

// not allowed
// let jonas&matilda;

// allowed
let jonas_matilda;
jonas_matilda = "JM";

// allowed
// specific use case for object oriented programming
// initial letter in 'caps'
let Person = "Jonas";

// not allowed
// 'new' is a reserved keyword in JS
// let new = 27;

// not allowed
// 'function' is a reserved keyword in JS
// let function = 27;

// allowed
// since the reserved keywords starts with '_' and '$'
// only '_' and '$' are allowed as prefix to the variable name in JS
let _function = 27;
let $new = 27;

// 'name' is also a reserved keyword in JS, 
// but still allowed to be used
// it is a good practice to not use it as a variable name
let name = 'Jonas';

// for constants that will never change
// there is a convention of writing it all in uppercase
// the color will be differently used for constants
let PI = 3.1415
let E = 2.71

// --------------------------------------------------------------------


// 7 Prmitive Data Types in JavaScript
// JavaScript has Dynamic Typing
// --------------------------------------------------------------------

// 1. Number 
// used for floating point number 
let age = 23;
console.log(age);

// 2. String 
// Used for Text
let fName = "Jonas";
console.log(fName);

// 3. Boolean
// used for taking decisions
let fullAge = true;
console.log(fullAge);
console.log(false)

// 4. Undefined
// value taken by a variable that is not yet defined('empty value')
let children;
console.log(children);

// 5. null
// also means empty value
let emptyValue = null;
console.log(emptyValue);

// 6. Symbol (ES2015)
// value that is unique and cannot be changed
// will do it later

// 7. BigInt (ES2020)
// larger integers that the 'Number' type can hold
// will do it later

// --------------------------------------------------------------------


// operators
// --------------------------------------------------------------------

// typeof
console.log(typeof true);
console.log(typeof fullAge);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof fName);

// --------------------------------------------------------------------


// re-assigning a variable
// --------------------------------------------------------------------

// 1. 
let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = 'YES';
console.log(javascriptIsFun);

// 2. 
let year;
console.log(year);  // value is 'undefined'
console.log(typeof year);   // data type is 'undefined'

year = 1991;
console.log(year);  
console.log(typeof year);

// 3. 
console.log(typeof null);   // should be 'undefined' but shows 'object' (it's a bug)

// --------------------------------------------------------------------
