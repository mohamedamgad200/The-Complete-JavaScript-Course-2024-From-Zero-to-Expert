'use strict';
// const bookings = [];
//ES6 way = after prameter
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5 old default parameter
//   //numPassengers = numPassengers || 1;
//   //price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123'); // {"flightNum": "LH123",numPassengers:undefined,price:undefined}
// createBooking('LH123', 2);
// createBooking('LH123', 2, 200);
//skip second parameter to default
// createBooking('LH123', undefined, 200);
///////////////////////////////////////////////////////////////////////////////////////////////
// const fligh = 'LH234';
// const jonas = {
//   name: 'Jonas Shcmetman',
//   passport: 24555959595995,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 24555959595995) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// checkIn(fligh, jonas);
// console.log(fligh); //LH234
// console.log(jonas);
/*
const jonas = {
  name: 'Mr. Jonas Shcmetman',
  passport: 24555959595995,
};
*/
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };
// newPassport(jonas);
// checkIn(fligh, jonas);
///////////////////////////////////////////////////////////////////////////////////////////////
//Functions accepting callback functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function (str, fun) {
//   console.log(`Original string : ${str}`);
//   console.log(`Transformed string : ${fun(str)}`);
//   console.log(`Transformed by : ${fun.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// console.log('\n');
// transformer('JavaScript is the best!', oneWord);
// const high5 = function () {
//   console.log('🤗');
// };
// document.body.addEventListener('click', high5);
// ['mo', 'jo', 'so'].forEach(high5);
/////////////////////////////////////////////////////////////////////////////////////////////
//Functions return function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetHey = greet('Hey'); //=>store returned function
// greetHey('Amgad'); //Hey Amgad
// greet('Hey');
// greet('Hey')('Mohamed'); //Hey Mohamed
//Arrow function practice
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greetHey = greet('Hey'); //=>store returned function
// greetHey('Amgad'); //Hey Amgad
// greet('Hey');
// greet('Hey')('Mohamed'); //Hey Mohamed
/////////////////////////////////////////////////////////////////////////////////////////////
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(234, 'Jonas schmetmaan');
// lufthansa.book(123, 'Amgad Mohamed');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
// };
// const book = lufthansa.book;
// //Not work;
// // book(23, 'Ahmed Ibrahim'); //error this.airline undefined

// //Call Method
// book.call(eurowings, 23, 'Ahmed Ibrahim');
// book.call(lufthansa, 23, 'Ahmed Ibrahim lufthansa');
// console.log(lufthansa);
// console.log(eurowings);
// const swiss = {
//   airline: 'Swiss Air Line',
//   iataCode: 'LX',
//   booking: [],
// };
// book.call(swiss, 23, 'Ahmed Mohamed');
// console.log(swiss);

// //Apply method
// const flighData = [567, 'Goorge coper'];
// book.apply(swiss, flighData);
// console.log(swiss);
// ////////////////////////////////////////////////////////////////////////////////////
// //Blind method
// // book.call(eurowings, 23, 'Ahmed Ibrahim');
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven williams');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Ahmed Amgad');
// bookEW23('Amgad Mohamed');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //this element itself
// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(200));
// console.log(addVat(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(200));
// console.log(addVat2(100));
/*
Coding Challenge #1 
Let's build a simple poll app! 
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below. 
Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things: 
1.1. 
1.2. 
Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this: 
What is your favourite programming language? 
0: JavaScript 
1: Python 
2: Rust 
3: C++ 
(Write option number) 
Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 
20 
The Complete JavaScript Course 
Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 
Hints: Use many of the tools you learned about in this and the last section 
GOOD LUCK 
 const poll = { 
question: "What is your favourite programming language?", 
options: ["0: JavaScript", "1: Python", "2: Rust", "3:  
C++"], 
// This generates [0, 0, 0, 0]. More in the next section! 
answers: new Array(4).fill(0), 
};
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:  C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `What is your favourite programming language?\n${this.options.join(
//           '\n'
//         )}\n(Write option number) `
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResult();
//     this.displayResult('string');
//   },
//   displayResult(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(',')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
//////////////////////////////////////////////////////////////////////////////////////////
//can run alot of time
// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();

// runOnce();
//IIFE
// (function () {
//   console.log('this will never run again');
//   const isprivate = 23;
// })();
// console.log(isprivate); //error
// (() => console.log('this will never run again'))();

// {
//   const isprivate = 23;
// }
// console.log(isprivate);//error
////////////////////////////////////////////////////////////////////////////////////////////
//Closure
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} pasenger`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);
////////////////////////////////////////////////////////////////////////////////////

//Example 1

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); //46
// console.dir(f); //==>clouser is a
// h();
// f(); //1554
// console.dir(f); //==>clouser is b

//Example 2
// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are boarding all ${n} passengers`);
//     console.log(`There are 3 groups ,each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassenger(180, 3);
/////////////////////////////////////////////////////////////////////
/*
Coding Challenge #2 
This is more of a thinking challenge than a coding challenge 
Your tasks: 
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again! 
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example. 
(function () { 
const header = document.querySelector('h1'); 
header.style.color = 'red'; 
})(); 
GOOD LUCK 
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
