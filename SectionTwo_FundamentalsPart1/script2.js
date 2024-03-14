// OUTERSECTION
// type conversion and coercion
// type conversion > manually converts one type to another (explicitly)
// type coercion > automatically converts one type to another(implicitly)
// --------------------------------------------------------------------

// INNERSECTION
// 1.
// type conversion

// SUBSECTION
// a.
const inputYear1 = "1991";
// typecast's 'int 18' to 'str 18'
// result is concatenated string
console.log(inputYear1 + 18);

// SUBSECTION
// b.
const inputYear2 = "1991";
// 'Number()' function typecast's 'string to integer'
console.log(Number(inputYear2));
// here the result is the addition of two numbers
console.log(Number(inputYear2) + 18);

// SUBSECTION
// c.
// error > 'NaN (Not a Number)'
console.log(Number("Jonas"));

// SUBSECTION
// d.
// integer is converted to a string
console.log(String("23"));

// INNERSECTION
// 2.
// type coercion

// SUBSECTION
// a.
// 'int 23' get's converted to 'str 23' due to type coercion
console.log("I am " + 23 + " years old");

// SUBSECTION
// b.
// this is exactly same as writing this
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");

// SUBSECTION
// c.
// in this case strings are converted to integers due to the '-' sign operator
console.log("23" - "10" - 3);

// SUBSECTION
// d.
// using a '+' sign operator would convert integer to string and hence concatenate the result
console.log("23" + "10" + 3);
console.log(10 + "23" + "10");

// SUBSECTION
// e.
// here the strings are converted to integers
console.log("23" * "2");
console.log("23" / "2");

// PARTS
// ex. 1.
let n = "1" + 1;
n = n - 1;
console.log(n);

// PARTS
// ex. 2.
let m = 2 + 3 + 4 + "5";
console.log(m);

// PARTS
// ex. 3.
let o = "10" - "4" - "3" - 2 + "5";
console.log(o);

// --------------------------------------------------------------------
