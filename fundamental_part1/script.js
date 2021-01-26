// Linking a JavaScript File
console.log("******************** Linking a JavaScript File ********************")
let js = "amazing";
console.log(40 + 8 + 23 - 10);


// Values and Variables
console.log("******************** Values and Variables ********************")
console.log("Jonas");
console.log(23);

let firstNme = "Matilda";
console.log(firstNme);


// Variable name conventions
console.log("******************** Variable name conventions ********************")
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);



// Data Types
console.log("******************** Data Types ********************")
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);


// let, const and var
console.log("******************** let, const and var ********************")
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;
var job = 'programmer';
job = 'teacher'

lastNme = 'Schmedtmann';
console.log(lastNme);



// Math operators
console.log("******************** Math operators ********************")
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


// Assignment operators
console.log("******************** Assignment operators ********************")
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);


// Comparison operators
console.log("******************** Comparison operators ********************")
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


// Operator Precedence
console.log("******************** Operator Precedence ********************")
//const now = 2037;
const ageJona = now - 1991;
const ageSara = now - 2018;
console.log(now - 1991 > now - 2018);

let xx, yy;
xx = yy = 25 - 10 - 5; // x = y = 10, x = 10
console.log(xx, yy);

const averageAge = (ageJona + ageSara) / 2;
console.log(ageJona, ageSara, averageAge);


// Coding Challenge 1
console.log("******************** Coding Challenge 1 ********************")

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);



// Strings and Template Literals
console.log("******************** Strings & Template Literals ********************")

const firstNm = 'Jonas';
const jobdesc = 'teacher';
const birthYr = 1991;
const yr = 2037;

const jonass = "I'm " + firstNm + ', a ' + (yr - birthYr) + ' year old ' + jobdesc + '!';
console.log(jonass);

const jonasNew = `I'm ${firstNm}, a ${yr - birthYr} year old ${jobdesc}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


// Taking Decisions: if / else Statements
console.log("******************** if / else Statements ********************")

const agesara = 15;

if (agesara >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - agesara;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


const yrforloop = 2012;

let century;
if (yrforloop <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`You belong to ${century} century !`);


// Coding Challenge #2
console.log("******************** Coding Challenge #2 ********************")
const massMurali = 78;
const heightMurali = 1.69;
const massSwathi = 92;
const heightSwathi = 1.95;

// const massMurali = 95;
// const heightMurali = 1.88;
// const massSwathi = 85;
// const heightSwathi = 1.76;

const BMIMurali = massMurali / heightMurali ** 2;
const BMISwathi = massSwathi / (heightSwathi * heightSwathi);
console.log(BMIMurali, BMISwathi);

if (BMIMurali > BMISwathi) {
  console.log(`Murali's BMI (${BMIMurali}) is higher than Swathi's (${BMISwathi})!`)
} else {
  console.log(`Swathi's BMI (${BMISwathi}) is higher than Murali's (${BMIMurali})!`)
}


// type conversion
console.log("******************** Type conversion ********************")
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');
let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log("******************** Truthy and Falsy Values ********************")

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all !");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}



// Equality Operators: == vs. ===
console.log("******************** Equality Operators ********************")

const agetocheck = '18';
if (agetocheck === 18) console.log('You just became an adult :D (strict)');
if (agetocheck == 18) console.log('You just became an adult :D (loose)');

//const favourite = Number(prompt("What's your favourite number?"));
const favourite = 23;
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');





// Logical Operators
console.log("******************** Logical Operators ********************")

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// Logical Operators Challenge
console.log("******************** Logical Operators Challenge ********************")

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}



// The switch Statement
console.log("******************** The switch Statement ********************")

const day = 'monday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}


// The Conditional (Ternary) Operator
console.log("******************** The Conditional (Ternary) Operator ********************")

const agetodrink = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = agetodrink >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (agetodrink >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}

console.log(drink2);
console.log(`I like to drink ${agetodrink >= 18 ? 'wine 🍷' : 'water 💧'}`);


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);