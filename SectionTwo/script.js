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


// variable name convention
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
