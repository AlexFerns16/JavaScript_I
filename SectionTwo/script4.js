
// equality operators & inequality operators
// --------------------------------------------------------------------

// assignment operator
const age1 = 18;
const age2 = 18;


// '===' (strict equality operator) > checks
// 'int 18' must srictly match 'int 18'
if (age1 === 18) console.log("You just became an adult : strict, int");
if (age1 === '18') console.log("You just became an adult : strict, str");


// '==' > (loose equality operator) > checks
// 'int 18' can match 'int 18' as well as 'str 18' (coercion)
if (age1 == 18) console.log("You just became an adult : loose, int");
if (age1 == '18') console.log("You just became an adult : loose, str");


// '!==' (strict inequality operator) > checks
// 'int 18' must srictly match 'int 18'
if (age2 !== 18) console.log("You are not '18' : strict, int");
if (age2 !== '18') console.log("You are not '18' : strict, str");


// '!=' > (loose inequality operator) > checks
// 'int 18' can match 'int 18' as well as 'str 18' (coercion)
if (age2 != 18) console.log("You are not '18' : loose, int");
if (age2 != '18') console.log("You are not '18' : loose, str");


// 'prompt' > ask's for an input

// value entered from the console is always in 'string' format
const favouriteString = prompt("What's your favourite number?");
console.log(favouriteString);
console.log(typeof(favouriteString));

// type conversion to 'Number()'
const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof(favouriteNumber));


// ex. 1.

// loose equality operator
if (favouriteString == 7) console.log("Cool! '7' is an amazing number!  : loose, int, favStr");
if (favouriteNumber == 7) console.log("Cool! '7' is an amazing number!  : loose, int, favNum");
if (favouriteString == '7') console.log("Cool! '7' is an amazing number! : loose, str, favStr");

// strict equality operator
if (favouriteString === 7) console.log("Cool! '7' is an amazing number!  : strict, int, favStr");
if (favouriteNumber === 7) console.log("Cool! '7' is an amazing number!  : strict, int, favNum");
if (favouriteString === '7') console.log("Cool! '7' is an amazing number! : strict, str, favStr");


// ex. 2.

// '!==' (strict inequality operator)
if (favouriteString !== 7) console.log("Why not '7'! : strict, int, favStr");
if (favouriteNumber !== 7) console.log("Why not '7'! : strict, int, favNum");
if (favouriteString !== '7') console.log("Why not '7'! : strict, str, favStr");

// '!=' (loose inequality operator)
if (favouriteString != 7) console.log("Why not '7'! : loose, int, favStr");
if (favouriteNumber != 7) console.log("Why not '7'!  : loose, int, favNum");
if (favouriteString != '7') console.log("Why not '7'! : loose, str, favStr");

// --------------------------------------------------------------------
