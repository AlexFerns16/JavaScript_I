
// looping backwards and loops in loops
// --------------------------------------------------------------------

// 1. 
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

// 
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

// loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// --------------------------------------------------------------------
