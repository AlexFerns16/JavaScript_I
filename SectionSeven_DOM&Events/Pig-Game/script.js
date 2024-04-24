'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// initiating the score on front-end to 0
score0El.textContent = 0;
score1El.textContent = 0;

// hidding the dice
diceEl.classList.add('hidden');

// to store the value of the current score
let currentScore = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add the dice to the current score
    currentScore = currentScore + dice;
    console.log('current score', currentScore);
  } else {
    // switch to the next player
  }
});
