// OUTERSECTION

// logical operators
// boolean logic > and, or, & not operators

// --------------------------------------------------------------------

// PARTS
const hasDriverLicense1 = true; // A
const hasDriverLicense2 = false; // A
const hasGoodVision1 = true; // B
const hasGoodVision2 = false; // B
const isTired1 = true; // C
const isTired2 = false; // C

// PARTS
console.log(hasDriverLicense1 && hasGoodVision1); // and
console.log(hasDriverLicense2 && hasGoodVision1); // and
console.log(hasDriverLicense2 || hasGoodVision1); // or
console.log(!hasDriverLicense1); // not

// PARTS
const shouldDrive1 = hasDriverLicense1 && hasGoodVision1;
const shouldDrive2 = hasDriverLicense1 && hasGoodVision2;

// INNERSECTION
// test conditions

// PARTS
if (shouldDrive1) {
  console.log("Sarah is able to drive");
}

// PARTS
if (!shouldDrive2) {
  console.log("Someone else should drive");
}

// PARTS
if (hasDriverLicense1 && hasGoodVision1 && isTired1) {
  console.log("Sarah should drive");
}

// PARTS
if (hasDriverLicense1 && hasGoodVision1 && isTired2) {
  console.log("Sarah should drive");
} else {
  console.log("Sarah should not drive");
}

// PARTS
if (hasDriverLicense1 && (hasGoodVision1 || isTired2)) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

// PARTS
if (hasDriverLicense2 && (hasGoodVision1 || isTired1)) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

// PARTS
if (!hasDriverLicense2 && (hasGoodVision1 || isTired1)) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

// PARTS
if (hasDriverLicense1 && (hasGoodVision2 || isTired2)) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

// PARTS
if (hasDriverLicense1 && (!hasGoodVision2 || isTired2)) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

// --------------------------------------------------------------------
