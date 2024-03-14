// OUTERSECTION
// defining and calling/running/invoking a function
// --------------------------------------------------------------------

// INNERSECTION
// defining a function
function logger() {
  console.log("My name is Jonas");
}

// PARTS
// calling / running / invoking a function
logger();
logger();
logger();

// INNERSECTION
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// PARTS
console.log(fruitProcessor(5, 0));

// PARTS
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// PARTS
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//PARTS
// built-in function
Number("23");

// --------------------------------------------------------------------
