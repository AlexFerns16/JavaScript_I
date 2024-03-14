// OUTERSECTION
// functions calling other functions
// --------------------------------------------------------------------

// PARTS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

// PARTS
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

// PARTS
console.log(fruitProcessor(2, 3));

// --------------------------------------------------------------------
