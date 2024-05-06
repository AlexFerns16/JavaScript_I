'use strict';

// Primitives vs. Objects (Primitive vs. Reference Types)

// Primitive Data Types (Primitive Types)
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Objects Data Types (Reference Types)
// 1. Object Literal
// 2. Arrays
// 3. Functions
// 4. Many More ...

// JS Engine
// 'functions' and 'primitives' are stored in 'call stack'
// 'objects' are stored in 'heap'

//
let age = 30;
let oldAge = age;
age = 31;

//
console.log(age);
console.log(oldAge);

//
const me = {
  name: 'Jonas',
  age: 30,
};

//
const friend = me;
friend.age = 27;

//
console.log('Friend', friend);
console.log('Me', me);

//
// Primitive Values Examples
// ----------------------------------------------------------

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);            //31
// console.log(oldAge);         //30

//
// CALL STACK
// ----------------------------------------------------------

// Identifier       Address       Value

// age              0001          30
// oldAge           0001          30
// age              0002          31

//
// Reference Values Examples
// ----------------------------------------------------------

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend', friend);
// console.log('Me', me);

//
// CALL STACK
// ----------------------------------------------------------

// Identifier       Address       Value

// me               0003          D307 (Ref. to mem. add. in heap)
// friend           0003          D307 (Ref. to mem. add. in heap)

//
// HEAP
// ----------------------------------------------------------

// Address          Value

// D307             {
//                    name: 'Jonas';
//                    age: 30;
//                  }

// 3 Big Topics on 'How JavaScript Works Behind The Scene'
// ----------------------------------------------------------

// 1.
// Prototypal Inheritance
// Object Oriented Programming (OOP) with JavaScript

// 2.
// Event Loop
// Asynchronous JavaScript: Promises, Async/Await and AJAX

// 3.
// How The DOM Really Works
// Advanced DOM and Events
