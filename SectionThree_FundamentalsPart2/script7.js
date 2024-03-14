
// introduction to arrays
// --------------------------------------------------------------------

// 1.
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';


// 2.
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


// 3.
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);


// 4. indexing
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);


// 5. length of the array
console.log(friends.length);

// ex. 1.
// to get the last element  of the array
console.log(friends[friends.length - 1]);


// 6. mutating an array
// here we are mutating the element in an array
friends[2] = 'Jay';
console.log(friends);

// ex. 1.
// this is illegal
// cannot mutate the array 'friends' as it is declared as 'const'
// Uncaught TypeError: Assignment to constant variable
// ...
// ---------- uncomment code ----------
// friends = ['Bob', 'Alice']
// ---------- uncomment code ----------


// 7.
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// 8.
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const birthYears = [1990, 1967, 2002, 2010, 2018];
console.log(birthYears);

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);
const age4 = calcAge(birthYears[3]);
const age5 = calcAge(birthYears[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[2]), calcAge(birthYears[3]), calcAge(birthYears[4])]
console.log(ages);

// --------------------------------------------------------------------
