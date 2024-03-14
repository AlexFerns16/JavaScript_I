
// boolean

// falsy values are values that are not exactly false 
// but become false when we try converting them to boolean

// 5 falsy values > 0, '', undefined, null, NaN
// 'False' is 'False' by itself

// everthing else are truthy values
// they will be converted to 'True' when we try to convert them to boolean

// --------------------------------------------------------------------

// 
console.log(Boolean(0));                // 0
console.log(Boolean(''));               // empty string
console.log(Boolean(undefined));        // undefined
console.log(Boolean(null));             // null
console.log(Boolean(NaN));              // Not a Number
console.log(Boolean({}));               // empty object
console.log(Boolean('Jonas'));          // string


//
const money1 = 0;
const money2 = 100;

if (money1) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

if (money2) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}


// 
let height1;
let height2 = 123;
let height3 = 0;

if (height1) {
    console.log('YAY! height is defined');
} else {
    console.log('height is undefined');
}

if (height2) {
    console.log('YAY! height is defined');
} else {
    console.log('height is undefined');
}

if (height3) {
    console.log('YAY! height is defined');
} else {
    console.log('height is undefined');
}

// --------------------------------------------------------------------
