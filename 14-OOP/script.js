'use strict';
//constructor function can use function decleration or function expression but arrow function can't use it because of it's doesn't have his own this keyword and we need that
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//Never make this
//   this.calcAge = function () {
//     console.log(2037 - this.calcAge);
//   };
// };
// person.hey=function()
// {
//     console.log('Hey 👋');
// }
//create object instances of constructor function
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);
// console.log(jonas instanceof Person);

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false
// Person.prototype.species = 'Hamo Sapines';
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); //false
//////////////////////////////////////////////////////////
// console.log(jonas.__proto__);
//Object.prototype(top of prototype)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
//////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //new Array==[]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.__proto__); //Object.__proto__
/////////////////////////////////////////////////////////
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
///////////////////////////////////////////////////////////
/*
Object Oriented Programming (OOP)  
Coding Challenge #1 
Your tasks: 
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h 
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console 
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console 
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them 
Test data: 
§ Data car 1: 'BMW' going at 120 km/h 
§ Data car 2: 'Mercedes' going at 95 km/h 
GOOD LUCK 
*/
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const bmw = new Car('BMW', 120);
// const marcedes = new Car('Mercedes', 95);
// console.log(bmw);
// console.log(marcedes);
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };
// bmw.accelerate();
// marcedes.accelerate();
// bmw.brake();
// marcedes.brake();
////////////////////////////////////////////////////////////////////////////////
//class expression
// const Person = class {};
//class decleration
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a fullName`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('hey 👋');
//   }
// }
// const jesica = new Person('Jestica Davis', 1999);
// console.log(jesica);
// jesica.calcAge();
// console.log(jesica.__proto__ === Person.prototype); //true
// Person.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jesica.greet();
// Person.hey();
// jesica.hey(); //error
//////////////////////////////////////////////////////////////////////////////
// const account = {
//   owner: 'Jonas',
//   movements: [100, 300, 40, 40, 80],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(movement) {
//     this.movements.push(movement);
//   },
// };
// console.log(account.latest);
// account.latest = 100;
// console.log(account.movements);
///////////////////////////////////////////////////////////////////////////////
//Object.create()
// const Personproto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   },
// };
// const steven = Object.create(Personproto);
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();
// const sarah = Object.create(Personproto);
// sarah.init('sarah', 1979);
// sarah.calcAge();
///////////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #2 
Your tasks: 
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl') 
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6) 
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6) 
4. Create a new car and experiment with the 'accelerate' and 'brake' 
methods, and with the getter and setter. 
Test data: 
§ Data car 1: 'Ford' going at 120 km/h 
GOOD LUCK 
*/
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);
/////////////////////////////////////////////////////////////////////////////////
//inheritance
//1.constructor function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mark = new Student('Mark', 2002, 'Computer Science');
// console.log(mark);
// mark.introduce();
// mark.calcAge();
// console.log(mark.__proto__);
// console.log(mark.__proto__.__proto__);
// console.log(mark instanceof Person); //true
// console.log(mark instanceof Student); //true
// console.log(mark instanceof Object); //true
// Student.prototype.constructor = Student;
///////////////////////////////////////////////////////////////////
/*
 Coding Challenge #3 
Your tasks: 
1. Use a constructor function to implement an Electric Car (called 'EV') as a child 
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property) 
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo' 
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%' 
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism 
Test data: 
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% 
GOOD LUCK 
*/
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h,with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
////////////////////////////////////////////////////////////////////////////
//inheritance using es6 classes
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a fullName`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('hey 👋');
//   }
// }
// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     //Always need to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old,but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }
// const martha = new Student('Martha Jonas', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();
////////////////////////////////////////////////////////////
//inheritance using Object.create()
// const Personproto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   },
// };
// const steven = Object.create(Personproto);
// const StudentProto = Object.create(Personproto);
// StudentProto.init = function (firstName, birthYear, course) {
//   Personproto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2004, 'Computer Science');
// console.log(jay);
// jay.introduce();
////////////////////////////////////////////////////////////
//Classes more examples
// 1) public fields
// 2) private fields
// 3) public methods
// 4) private methods
// class Account {
//   // 1) public fields(instances)
//   locale = navigator.language;
//   // 2) private fields(instances)
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     //Protected property
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // 3) public methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   _aproveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._aproveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
//   // 4) private methods
//   // #aproveLoan(val) {
//   //   return true;
//   // }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// // acc1.movements.push(30);
// // acc1.movements.push(-140);
// acc1.deposit(150);
// acc1.withdraw(40);
// acc1.requestLoan(10000);
// // acc1.aproveLoan(10000);
// console.log(acc1.getMovements());
// console.log(acc1);
// // console.log(acc1.#movement);//error private
/*
Coding Challenge #4 
Your tasks: 
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' 
child class of the 'CarCl' class 
2. Make the 'charge' property private 
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' 
methods of this class, and also update the 'brake' method in the 'CarCl' 
class. Then experiment with chaining! 
Test data: 
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% 
GOOD LUCK 
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 6;
  }
  set speedUs(speed) {
    this.speed = speed * 6;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h,with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery()
  .accelerate();
console.log(rivian.speedUS);
