// OUTERSECTION
// reviewing functions
// --------------------------------------------------------------------

// PARTS
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// PARTS
const calcRetirement = function (age) {
  return 65 - age;
};

// PARTS
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired ${retirement * -1} years back`;
  }
};

// PARTS
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));

// --------------------------------------------------------------------
