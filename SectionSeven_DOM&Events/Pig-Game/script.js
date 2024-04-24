'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// initiating the score on front-end to 0
score0El.textContent = 0;
score1El.textContent = 0;

// hidding the dice
diceEl.classList.add('hidden');

// scores : player 1 @index_position 0 | player 2 @index_position 1
const scores = [0, 0];

// to store the value of the current score
let currentScore = 0;

// active player
let activePlayer = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true, switch to next player

  //
  if (dice !== 1) {
    // add the dice to the current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    //
  } else {
    // switch to the next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
