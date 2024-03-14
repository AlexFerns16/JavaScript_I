
// defining and calling/running/invoking a function

// --------------------------------------------------------------------

// defining a function
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking a function
logger();
logger();
logger();


//
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

//
console.log(fruitProcessor(5, 0));

//
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// built-in function
Number('23');

// --------------------------------------------------------------------
