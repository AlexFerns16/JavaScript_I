// OUTERSECTION

// equality operators & inequality operators
// --------------------------------------------------------------------

// INNERSECTION
// assignment operator
const age1 = 18;
const age2 = 18;

// PARTS
// '===' (strict equality operator) > checks
// 'int 18' must srictly match 'int 18'
if (age1 === 18) console.log("You just became an adult : strict, int");
if (age1 === "18") console.log("You just became an adult : strict, str");

// PARTS
// '==' > (loose equality operator) > checks
// 'int 18' can match 'int 18' as well as 'str 18' (coercion)
if (age1 == 18) console.log("You just became an adult : loose, int");
if (age1 == "18") console.log("You just became an adult : loose, str");

// PARTS
// '!==' (strict inequality operator) > checks
// 'int 18' must srictly match 'int 18'
if (age2 !== 18) console.log("You are not '18' : strict, int");
if (age2 !== "18") console.log("You are not '18' : strict, str");

// PARTS
// '!=' > (loose inequality operator) > checks
// 'int 18' can match 'int 18' as well as 'str 18' (coercion)
if (age2 != 18) console.log("You are not '18' : loose, int");
if (age2 != "18") console.log("You are not '18' : loose, str");

// INNERSECTION
// 'prompt' > ask's for an input

// PARTS
// value entered from the console is always in 'string' format
const favouriteString = prompt("What's your favourite number?");
console.log(favouriteString);
console.log(typeof favouriteString);

// PARTS
// type conversion to 'Number()'
const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

// INNERSECTION
// ex. 1.

// PARTS
// loose equality operator
if (favouriteString == 7)
  console.log("Cool! '7' is an amazing number!  : loose, int, favStr");
if (favouriteNumber == 7)
  console.log("Cool! '7' is an amazing number!  : loose, int, favNum");
if (favouriteString == "7")
  console.log("Cool! '7' is an amazing number! : loose, str, favStr");

// PARTS
// strict equality operator
if (favouriteString === 7)
  console.log("Cool! '7' is an amazing number!  : strict, int, favStr");
if (favouriteNumber === 7)
  console.log("Cool! '7' is an amazing number!  : strict, int, favNum");
if (favouriteString === "7")
  console.log("Cool! '7' is an amazing number! : strict, str, favStr");

// INNERSECTION
// ex. 2.

// PARTS
// '!==' (strict inequality operator)
if (favouriteString !== 7) console.log("Why not '7'! : strict, int, favStr");
if (favouriteNumber !== 7) console.log("Why not '7'! : strict, int, favNum");
if (favouriteString !== "7") console.log("Why not '7'! : strict, str, favStr");

// PARTS
// '!=' (loose inequality operator)
if (favouriteString != 7) console.log("Why not '7'! : loose, int, favStr");
if (favouriteNumber != 7) console.log("Why not '7'!  : loose, int, favNum");
if (favouriteString != "7") console.log("Why not '7'! : loose, str, favStr");

// --------------------------------------------------------------------
