
// arrow function
// --------------------------------------------------------------------

// 1.
// 'birthYear' > parameter
// '2037 - birthYear' > expression
const calcAge1 = birthYear => 2037 - birthYear;
const age1 = calcAge1(1991);
console.log(age1);


// 2.
const yearsUntilRetirement1 = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement1(1991));


// 3.
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1980, 'Bob'));

// --------------------------------------------------------------------
