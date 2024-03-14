// OUTERSECTION
// looping backwards and loops in loops
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
// single for loop
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

// PARTS
// loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// --------------------------------------------------------------------
