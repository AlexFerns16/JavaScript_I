// OUTERSECTION

// switch case statement

// --------------------------------------------------------------------

// PARTS
// defining variable(s)
const day = "wednesday";

// PARTS
// solved using switch case
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan Course Structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  // when you don't use 'break'
  // it jump's to the immediate next 'case' i.e. 'thursday'

  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  // when you don't use 'break'
  // it jump's to the immediate next 'case' i.e. 'sunday'

  case "sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day");
}

// PARTS
// solved using if--else-if--else

if (day === "monday") {
  console.log("Plan Course Structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// --------------------------------------------------------------------
