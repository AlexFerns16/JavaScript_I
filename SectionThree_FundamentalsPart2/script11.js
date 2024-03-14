// OUTERSECTION
// iteration: the for loop
// --------------------------------------------------------------------

// INNERSECTION
// 1.
// violates the 'don't repeat yourself' priciple
console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");

// INNERSECTION
// 2.
// for loop > keeps running while the condition remains 'true'
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// --------------------------------------------------------------------

// OUTERSECTION
// looping arrays, breaking and continuing
// --------------------------------------------------------------------

// INNERSECTION
// 1.

// PARTS
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// PARTS
const types1 = [];
const types2 = [];

// PARTS
for (let i = 0; i < jonasArray.length; i++) {
  // reading from the array
  console.log(jonasArray[i], typeof jonasArray[i]);

  // filling an array
  types1[i] = typeof jonasArray[i];
  types2.push(typeof jonasArray[i]);
}

// PARTS
console.log(types1);
console.log(types2);

// INNERSECTION
// 2.

// PARTS
const years = [1991, 2007, 1969, 2020];
const ages = [];

// PARTS
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

// PARTS
console.log(ages);

// INNERSECTION
// 3.
// continue and break

// PARTS
for (let i = 0; i < jonasArray.length; i++) {
  // allowing only 'string' data type
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// PARTS
for (let i = 0; i < jonasArray.length; i++) {
  // terminating the loop when 'number' data type is encountered
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// --------------------------------------------------------------------
