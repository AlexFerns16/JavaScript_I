'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// destructuring an array
// unpacking

//
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
console.log(arr);

//
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//
let [first1, second1] = restaurant.categories;
console.log(first1, second1);

//
let [first2, , third2] = restaurant.categories;
console.log(first2, third2);

// swapping using temp
const temp = first2;
first2 = third2;
third2 = temp;
console.log(first2, third2);

// swapping without using temp
[first2, third2] = [third2, first2];
console.log(first2, third2);

// receiving values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested1 = [2, 4, [5, 6]];
const [i1, , j1] = nested1;
console.log(i1, j1);

// nested destructuring
const nested2 = [2, 4, [5, 6]];
const [i2, , [j2, k2]] = nested2;
console.log(i2, j2, k2);

// nested destructuring
const nested3 = [2, 4, [5, 6]];
const [i3, , [, k3]] = nested3;
console.log(i3, k3);

// default values

// 'n' is 'undefined'
const [l, m, n] = [8, 9];
console.log(l, m, n);

// 'r' takes the default value as '1'
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
