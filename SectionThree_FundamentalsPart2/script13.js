// OUTERSECTION
// the while loop
// use this, whenever you need a loop without the counter
// and/or, when you do not know before hand how many durations the loop will have
// --------------------------------------------------------------------

// INNERSECTION
// 1.
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

// INNERSECTION
// 2.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is about to end...");
}

// --------------------------------------------------------------------
