'use strict';

// Activating Strict Mode
console.log("******************** Activating Strict Mode ********************")

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// const interface = 'Audio';
// const private = 534;



// Functions
console.log("******************** Functions ********************")

function logger() {
    console.log('My name is Jonas');
  }
  // calling / running / invoking function
  logger();
  logger();
  logger();

  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  


// Function Declarations vs. Expressions
console.log("******************** Function Declarations vs. Expressions ********************")


// Function declaration - works at any place in the code
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
const age1 = calcAge1(1991);


// Function expression - invoking works after initialization 
const calcAge2 = function (birthYeah) {
   return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow functions
console.log("******************** Arrow functions ********************")

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
console.log("******************** function calling functions ********************")

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }
console.log(fruitProcessor(2, 3));



// Reviewing Functions
console.log("******************** Reviewing Functions ********************")

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const yearsURetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  console.log(yearsURetirement(1991, 'Jonas'));
  console.log(yearsURetirement(1950, 'Mike'));


// Challenges
console.log("******************** Challenges ********************")

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);




// Introduction to Arrays
console.log("******************** Introduction to Arrays ********************")

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log("Friends Updated : ", friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];
const agee1 = calAge(years[0]);
const agee2 = calAge(years[1]);
const agee3 = calAge(years[years.length - 1]);
console.log(agee1, agee2, agee3);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operations (Methods)
console.log("******************** Basic Array Operations (Methods) ********************")

const friendss = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friendss.push('Jay');
console.log(friendss);
console.log(newLength);

friendss.unshift('John');
console.log(friendss);

// Remove elements
friendss.pop(); // Last
const popped = friendss.pop();
console.log(popped);
console.log(friendss);

friendss.shift(); // First
console.log(friendss);
console.log(friendss.indexOf('Steven'));
console.log(friendss.indexOf('Bob'));

friendss.push(23);
console.log(friendss.includes('Steven'));
console.log(friendss.includes('Bob'));
console.log(friendss.includes(23));

if (friendss.includes('Steven')) {
  console.log('You have a friend called Steven');
}


// Coding Challenge
console.log("******************** Coding Challenge ********************")

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


// Introduction to Objects
console.log("******************** Introduction to Objects ********************")

const joearray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const joe = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log("Object - > : ", joe)



// Dot vs. Bracket Notation
console.log("******************** Dot vs. Bracket Notation ********************")

const joey = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(joey);
console.log(joey.lastName);
console.log(joey['lastName']);

const nameKey = 'Name';
console.log(joey['first' + nameKey]);
console.log(joey['last' + nameKey]);

// console.log(jonas.'last' + nameKey)
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
const interestedIn = 'age'
if (joey[interestedIn]) {
  console.log(joey[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
joey.location = 'Portugal';
joey['twitter'] = '@jonasschmedtman';
console.log(joey);


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${joey.firstName} has ${joey.friends.length} friends, and his best friend is called ${joey.friends[0]}`);



// Object Methods
console.log("******************** Object Methods ********************")

const joo = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      birthYeah: 1991,
      job: 'teacher',
      friends: ['Michael', 'Peter', 'Steven'],
      hasDriversLicense: true,
      // calcAge: function (birthYeah) {
      //   return 2037 - birthYeah;
      // }
      // calcAge: function () {
      //   // console.log(this);
      //   return 2037 - this.birthYeah;
      // }
      calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
      },
      getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${joo.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
      }
};
console.log(joo.calcAge());
console.log(joo.age);

// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(joo.getSummary());



// Coding Challenge
console.log("******************** Coding Challenge ********************")


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


// Iteration: The for Loop
console.log("******************** Iteration: The for Loop ********************")

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');
// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}



// Looping Arrays, Breaking and Continuing
console.log("******************** Looping Arrays, Breaking and Continuing ********************")

const jose = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
// console.log(jose[0])
// console.log(jose[1])
// ...
// console.log(jose[4])
// jose[5] does NOT exist

for (let i = 0; i < jose.length; i++) {
  // Reading from jose array
  console.log(jose[i], typeof jose[i]);
  // Filling types array
  // types[i] = typeof jose[i];
  types.push(typeof jose[i]);
}

console.log(types);


const yrs = [1991, 2007, 1969, 2020];
const ags = [];
for (let i = 0; i < yrs.length; i++) {
  ags.push(2037 - yrs[i]);
}
console.log(ags);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jose.length; i++) {
  if (typeof jose[i] !== 'string') continue;
  console.log(jose[i], typeof jose[i]);
}
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jose.length; i++) {
  if (typeof jose[i] === 'number') break;
  console.log(jose[i], typeof jose[i]);
}



// Looping Backwards and Loops in Loops
console.log("******************** Looping Backwards and Loops in Loops ********************")

const jonasss = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonasss.length - 1; i >= 0; i--) {
  console.log(i, jonasss[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 3; rep++) {
  console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


// The while Loop
console.log("******************** The while Loop ********************")

for (let rep = 1; rep <= 3; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;
while (rep <= 3) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}


// Coding Challenges
console.log("******************** Coding Challenges ********************")

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totalss = [];
for (let i = 0; i < billss.length; i++) {
  const tip = calcTips(billss[i]);
  tipss.push(tip);
  totalss.push(tip + billss[i]);
}
console.log(billss, tipss, totalss);
const calcAveragee = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAveragee([2, 3, 7]));
console.log(calcAveragee(totalss));
console.log(calcAveragee(tipss));
