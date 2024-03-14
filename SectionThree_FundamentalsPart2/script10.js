
// object methods
// --------------------------------------------------------------------

//
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // function attached to an object is called a method
    calcAge1: function (birthYear) {
        return 2037 - birthYear;
    },

    // 'this' > when the property is within the same 'object'
    // 'this' > executes only within the 'object'
    calcAge2: function () {
        // 'this' > is the 'object' itself
        // 'this.birthYear' accesses the property 'birthYear' within the 'object'
        console.log(this)
        return 2037 - this.birthYear;
    },

    // 
    calcAge3: function () {
        // 'this.age' > creates a new property 'age' within the same 'object'
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // 
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge3()}-years old \
        ${jonas.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} \
        driver's license`;
    }
}


// 1. 
console.log(jonas.calcAge1(1991));
console.log(jonas['calcAge1'](1991));

//
console.log(jonas.calcAge1(jonas.birthYear));
console.log(jonas['calcAge1'](jonas.birthYear));


// 2. 
console.log(jonas.calcAge2());
console.log(jonas['calcAge2']());


// 3. 
// 'this' > doesn't executes outside of the 'object'
// ...
// ---------- uncomment code ----------
// console.log(this.age);
// ---------- uncomment code ----------


// 4. 
console.log(jonas.calcAge3());
console.log(jonas['calcAge3']());


// 5. 
console.log(jonas.age);


// ex. 1. 
// "Jonas is a 46-years old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// --------------------------------------------------------------------
