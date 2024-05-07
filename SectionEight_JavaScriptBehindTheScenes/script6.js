'use strict';

// Primitives vs. Objects in Practice

// primitive types
// ------------------------------------------------------------
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

//
console.log(lastName);
console.log(oldLastName);

// reference types
// ------------------------------------------------------------
const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// references the same object
const marriedJessica1 = jessica1;
marriedJessica1.lastName = 'Davis';

//
console.log('Before marriage: ', jessica1);
console.log('After marriage: ', marriedJessica1);

// copying objects
// ------------------------------------------------------------
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// shallow copy
const marriedJessica2 = Object.assign({}, jessica2);
marriedJessica2.lastName = 'Davis';

//
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', marriedJessica2);

// manipulating the object
marriedJessica2.family.push('Mary');
marriedJessica2.family.push('John');

//
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', marriedJessica2);
