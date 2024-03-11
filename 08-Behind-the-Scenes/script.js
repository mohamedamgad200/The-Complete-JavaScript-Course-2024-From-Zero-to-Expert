'use strict';
//top level code
//global scope
/*
|--------------------------------------|
|            Global scope              |
|          calc Age<function           |
|          firstName=Jonas             |
|--------------------------------------|
*/
//this function creates
// this fuction scope equivalent to the variable environment of its execution contect
/*
|--------------------------------------|
|            calxAge scope             |
|          age=2037-birthyear          |
|          firstName=Jonas             |
|                                      |
|--------------------------------------|
*/
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  //age       calcAge scope
  //birthyear calcAge scope
  //first name calcAge scope from globalscope
  let output = `${firstName},You are ${age} , born in ${birthYear}`;
  function printAge() {
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      //var is function scope
      var millenial = true;
      //let,const is block scope
      // بيشوف اللي في الاسكوب الاول لو لاقها تمام لو ملقنهاش يبقي دور في الglobal scope بالنسبالي
      //الاوفرريد في نفس الاسكوب بس بتأثر مش بيأثر في اللي برة الاسكوب
      const firstName = 'Amgad';
      const str = `oh , and you 're a millenial,${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'New output';
    }
    //reference error
    //const,let is block scope so not work
    //console.log(str);
    //var is function scope
    console.log(millenial);
    console.log(output);
    //function not in this scope in scope of block
    // add(1, 2);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
//مش في scope بتاعه
// console.log(age);
//مش في scope بتاعه حتي لو فنكشن
// printAge();
*/
/////////////////////////////////////////////////////////////////////////////
//TDZ and Hoisting
//variable

//var inizilize before decleration undifined
// console.log(me);
//TDZ temporal dead zone let and const shouldn't use before decleration
// console.log(job);
// console.log(birthYear);
// var me = 'Amgad';
// let job = 'front end';
// const birthYear = 2002;

//function
/*function decleration the hoisting working on it but the
  fuction expression and arrow function depended on what the var,let ,const
  var initialize undefined but 
  let,const not using before  initialized and decleared because of TDZ
*/
// console.log(addDecl(1, 2));
/*
لما عملتها var حصل ايه 
var==>initialized undefied
احنا بنعمل كدة بقي وده اكيد غلط انا معرفهاش عشان ابصيلها ارجيومنت اصلا
undefined(1,2)
*/
// console.log(addExper(1, 2));
// console.log(addArrow(1, 2));
// console.log(addExper);
// console.log(addArrow);
// function addDecl(a, b) {
//   return a + b;
// }
// const addExper = function () {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;
// var addExper = function () {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

//Example
//wrong
/*
decleared variable first with const 
using function after decleared not before
*/
/*
console.log(numProduct);
if (!numProduct) deleteShoppingCart();
var numProduct = 10;
//dangerous function should be care when use it
function deleteShoppingCart() {
  console.log('All products deleted');
}
var x = 1;
const y = 2;
let z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
//print window object of js code
/*
console.log(this);
const calcAge = function (birthyear) {
  //48
  console.log(2037 - birthyear);
  //undefined
  // console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthyear => {
  //48
  console.log(2037 - birthyear);
  //window object because this of parent is window
  // console.log(this);
};
calcAgeArrow(1980);
const Jonas = {
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);
  },
};
Jonas.calcAge();

////////////////////////////////////////////////////////////

const sandy = {
  year: 2017,
};

/////////////////////////////////////////////////////////////

sandy.calcAge = Jonas.calcAge;
sandy.calcAge();

const f = Jonas.calcAge;
f();
*/
/* not scope but object literal
ده global scope عادي جدا جدا
object{

}
*/
// when declear with var the variable make property on windows object(Global object)
//so not use var
//===>not use arrow function as a method
//use function expression(regular function) to prevent this kind of mistake
// var firstName = 'Matelda';
// const Jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//console.log(this);
// console.log(2037 - this.year);
//regular function this undefind two way make a global variable of this
//old solution to solve it
//modern solution is using the arrow function because the arrow this of parent
// const self = this;
// const isMillenial = function () {
//   // console.log(self);
//   // undefined
//   console.log(this.year >= 1981 && this.year <= 1996);
//   //worked
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// const isMillenial = () => {
//   console.log(this.year >= 1981 && this.year <= 1996);
// };
// isMillenial();
// },
// Hey undefined
//this in arrow function is this of parent global object windows
//console.log(window.firstName); same of it
//no this will be Hey Matelda
// greet: () => {
//   console.log(window);
//   console.log(`Hey ${this.firstName}`);
// },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
//undefined
// console.log(window.firstName);
// Jonas.greet();
//Matelda
// console.log(window.firstName);
// Jonas.calcAge();
//////////////////////////////////////////////////////////////////////////
//work in regular function
// const addExper = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExper(1, 2);
// addExper(1, 2, 3, 4, 5, 6);
// Not work on arrow function
// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(1, 2);
// addArrow(1, 2, 3, 4, 5, 6);
///////////////////////////////////////////////////////////
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); //31
//ببساطة عشان غيرت الvalue بعد لما سويتها بالقديم فمش هتسمع الا في الاصلي بس
//let oldAge = age;==>oldAge=30زي ما بتقول كدة
// console.log(oldAge); //30
// let age = 30;
// age = 31;
// let oldAge = age;
// console.log(age); //31
//ببساطة عشان غيرت الvalue بعد لما سويتها بالقديم فمش هتسمع الا في الاصلي بس
//let oldAge = age;==>oldAge=30زي ما بتقول كدة
// console.log(oldAge); //31
// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
//ageفي الاثنين اتغير لان ببساطة انا هنا شاورت عليه
//by reference اي تغير هيسمع عنده مخدتش نسخة عندي by value
// console.log('me', me);
// console.log('friend', friend);
/////////////////////////////////////////////////////////////////////////////////
//primitive types
// let lastName = 'williams';
// let oldLastName = lastName;
// lastName = 'Davids';
// console.log(lastName, oldLastName);
//Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
/*
by reference وبالتالي يا معلم لما اغير بغير في الاصلي
not create a new object in heap
it simply just another variable in the stack
which hold the reference to the original object so both of these two variable simply point to exactly the same memory address in the heap and that's because in the stack the both hold the same memmory address reference 
changed any thing in  marriedJessica  also effect in jessica itself two different name for the same things
*/
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);
//error when we make it let we can make it
// marriedJessica = {};
/////////////////////////////////////////////////////
//copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Bob', 'Alice'],
};
//work only in the first level only
//if we have an object inside the object the inner object will be the same
//so it will still point to the same place in memory
//shallow copy not a deep clone which is what we would like to have
//shallow copy will only copy properties in the first level while a deep clone copy everything
const jessicacopy = Object.assign({}, jessica2);
jessicacopy.lastName = 'Davis';
//family not copy because it nested object and object assign work in first level only
jessicacopy.family.push('Amgad');
jessicacopy.family.push('Ahmed');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicacopy);
/////////////make a deep clone with library Lo-Dash
