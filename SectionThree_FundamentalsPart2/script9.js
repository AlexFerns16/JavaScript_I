// OUTERSECTION
// introduction to objects
// --------------------------------------------------------------------

// INNERSECTION
// 1.

// PARTS
// used for ordered data
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// PARTS
console.log(jonasArray);

// INNERSECTION
// 2.

// PARTS
// {property:value} > {key:value}
// {} > object literal syntax
// used for unstructured data
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// PARTS
console.log(jonas);

// INNERSECTION
// 3.

// PARTS
// using .(Dot) operator
// getting the property from the object
console.log(jonas.lastName);

// INNERSECTION
// 4.

// PARTS
// using [](Bracket) operator
// getting the property from the object
console.log(jonas["lastName"]);

// PARTS
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// INNERSECTION
// 5.

// PARTS
const interestedIn = prompt(
  "What do you want to know about 'Jonas'? \
Choose between firstName, lastName, age, job, and friends."
);

// PARTS
console.log(interestedIn);
console.log(jonas[interestedIn]);

// PARTS
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! \
    Choose between firstName, lastName, age, job, and friends."
  );
}

// INNERSECTION
// 6.
// adding a 'property:value' pair to the 'object'

// PARTS
// Dot operator
jonas.location = "Portugal";
console.log(jonas);

// PARTS
// Bracket operator
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// PARTS
// ex. 1.
// "'Jonas' has '3 friends', and his best friend is 'Michael'"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, \
and his best friend is called ${jonas.friends[0]}`);

// --------------------------------------------------------------------
