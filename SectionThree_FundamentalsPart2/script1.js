    
// forbids us to do certain things
// creates visible errors
'use strict'; 


// declaring and defining
let hasDriversLicense1 = false;
const passTest1 = true;


// without the use of 'strict' mode
// 'hasDriverLicense1' will be set as a new variable and defined as 'true'
// with the use of 'strict' mode the console will through an error stating
// ReferenceError: hasDriverLicense1 is not defined
// missing the 's' in 'Drivers'
// ...
// ---------- uncomment code ----------
// if (passTest1) hasDriverLicense1 = true;
// if (hasDriversLicense1) console.log("I can drive");
// ---------- uncomment code ----------


// declaring and defining
// Uncaught SyntaxError: Unexpected strict mode reserved word
// ...
// ---------- uncomment code ----------
// const interface = 'Audio';   // 'interface' > Unexpected strict mode reserved word
// const private = 534;         // 'private' > Unexpected strict mode reserved word
// ---------- uncomment code ----------


// declaring and defining
// Uncaught SyntaxError: Unexpected token 'if'
// ...
// ---------- uncomment code ----------
// const if = 23;               // 'if' > Unexpected token 'if'
// ---------- uncomment code ----------
