
// introduction to objects
// --------------------------------------------------------------------

// 1.
// used for ordered data
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

//
console.log(jonasArray);


// 2.
// {property:value} > {key:value}
// {} > object literal syntax
// used for unstructured data
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

//
console.log(jonas);


// 3.
// using .(Dot) operator
// getting the property from the object
console.log(jonas.lastName);


// 4.
// using [](Bracket) operator
// getting the property from the object
console.log(jonas['lastName']);

//
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


// 5.
const interestedIn = prompt("What do you want to know about 'Jonas'? \
Choose between firstName, lastName, age, job, and friends.");

//
console.log(interestedIn);
console.log(jonas[interestedIn]);

//
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! \
    Choose between firstName, lastName, age, job, and friends.");
}


// 6.
// adding a 'property:value' pair to the 'object'

// Dot operator
jonas.location = 'Portugal';
console.log(jonas);

// Bracket operator
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas);


// ex. 1.
// "'Jonas' has '3 friends', and his best friend is 'Michael'"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, \
and his best friend is called ${jonas.friends[0]}`);

// --------------------------------------------------------------------
