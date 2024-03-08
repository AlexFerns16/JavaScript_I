
// logical operators
// boolean logic > and, or, & not operators

// --------------------------------------------------------------------

const hasDriverLicense1 = true;      // A
const hasDriverLicense2 = false;     // A
const hasGoodVision1 = true;         // B
const hasGoodVision2 = false;        // B
const isTired1 = true;               // C
const isTired2 = false;              // C


console.log(hasDriverLicense1 && hasGoodVision1);   // and
console.log(hasDriverLicense2 && hasGoodVision1);   // and
console.log(hasDriverLicense2 || hasGoodVision1);   // or
console.log(!hasDriverLicense1);                    // not


const shouldDrive1 = hasDriverLicense1 && hasGoodVision1;
const shouldDrive2 = hasDriverLicense1 && hasGoodVision2;


// test conditions

//
if (shouldDrive1) {
    console.log('Sarah is able to drive');
}

//
if (!shouldDrive2) {
    console.log('Someone else should drive');
}

//
if (hasDriverLicense1 && hasGoodVision1 && isTired1) {
    console.log('Sarah should drive');
}

//
if (hasDriverLicense1 && hasGoodVision1 && isTired2) {
    console.log('Sarah should drive');
} else {
    console.log('Sarah should not drive');
}

//
if (hasDriverLicense1 && (hasGoodVision1 || isTired2)) {
    console.log('Sarah can drive');
} else {
    console.log('Someone else should drive');
}

//
if (hasDriverLicense2 && (hasGoodVision1 || isTired1)) {
    console.log('Sarah can drive');
} else {
    console.log('Someone else should drive');
}

//
if (!hasDriverLicense2 && (hasGoodVision1 || isTired1)) {
    console.log('Sarah can drive');
} else {
    console.log('Someone else should drive');
}

//
if (hasDriverLicense1 && (hasGoodVision2 || isTired2)) {
    console.log('Sarah can drive');
} else {
    console.log('Someone else should drive');
}

//
if (hasDriverLicense1 && (!hasGoodVision2 || isTired2)) {
    console.log('Sarah can drive');
} else {
    console.log('Someone else should drive');
}

// --------------------------------------------------------------------
