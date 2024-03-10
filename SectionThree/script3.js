
// functions

// --------------------------------------------------------------------

// 1.
// 'birthYear' > parameter
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// '1991' > argument
const age1 = calcAge1(1991)
console.log(age1);


// 2.
// 'birthYear' > parameter
function calcAge2(birthYear) {
    return 2037 - birthYear;
}

// '1991' > argument
const age2 = calcAge2(1991)
console.log(age2);


// 3.
// anonymous function
// function expression
// passing an 'anonymous function as a value' to a 'variable'
const calcAge3 = function (birthYear) {
    return 2037 - birthYear;
}

//
const age3 = calcAge3(1991);
console.log(age3);


// 4.
// passing a 'function as a value' to a 'variable'
const calcAge4 = function cA4 (birthYear) {
    return 2037 - birthYear;
}

//
const age4 = calcAge4(1991);
console.log(age4);

// --------------------------------------------------------------------
