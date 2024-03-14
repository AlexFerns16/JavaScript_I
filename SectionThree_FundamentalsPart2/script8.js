
// basic array operations (methods)
// --------------------------------------------------------------------

// 1.
const friends = ['Michael', 'Steven', 'Peter'];


// 2. 
// add elements to the end of the array
// 'friends' > 'array' (a special type of an 'object')
// 'push' > 'method' of the 'object'
friends.push('Jay');
console.log(friends);

// along with adding the element to the array
// it return's the length when assigned to a variable
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


// 3. 
// add elements to the beginning of the array
friends.unshift('John');
console.log(friends);


// 4.
// remove elements from the array
// removes the last element
friends.pop()
const poppedElement = friends.pop();
console.log(poppedElement);
console.log(friends);


// 5.
// removes the first element from the array
friends.shift();
console.log(friends);


// 6.
// returns the index position of the element in an array
console.log(friends.indexOf('Steven'));

// will return '-1' since 'Bob' is not present in the array
console.log(friends.indexOf('Bob'));

// returns 'true' or 'false' on the existence of the element > ES6
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// strict equality
// pushed 'int 23'
friends.push(23);

// checked 'str 23'
// returns 'false'
console.log(friends.includes('23'));

// 'int 23' returns 'true'
console.log(friends.includes(23));

// using conditional statement
if (friends.includes('Peter')) {
    console.log("You have a friend called 'Peter'");
}


// 7.
// array1
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
console.log(typeof(array1));

// array2
const array2 = [10, 20, 30, 40, 50];
console.log(array2);
console.log(typeof(array2));

// array 3
// concatenation
// the result is the string of all the elements from both the arrays
const array3 = array1 + array2;
console.log(array3);
console.log(typeof(array3));

// --------------------------------------------------------------------
