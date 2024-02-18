"use strict";
/*
function
function logger() {
  console.log("my name amgad");
}
can use it more than one
logger();
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  //make juice
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
return juice
  return juice;
}
storing return value of function in variable and log it
const fruitJuice = fruitProcessor(1, 2);
console.log(fruitJuice);
direct log without store in variable
function decleration
function calcualteAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcualteAge1(1991);
console.log(age1);
//function expression
//anonymous function
const calcualteAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcualteAge2(1991);
console.log(age2);
//Arrow fuction
const calcualteAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcualteAge3(1991);
console.log(age3);
//Arrow function we have more lines to do and one parameter
//calculate retirementتقاعد علي المعاش
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //should have return
  // return retirement;
  return `${firstName} retirement in ${retirement} ages`;
};
console.log(yearsUntilRetirement(1991, "amgad"));
Arrow function we have more lines to do and one parameter
const cutPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  //console.log(apples, oranges);
  const orangePices = cutPieces(oranges);
  const applePices = cutPieces(apples);
  //make juice
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
};
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins}) `);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas}) `);
  } else {
    console.log(`No team wins`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
const calcualteAge = function (birthYear) {
  return 2037 - birthYear;
};
//calculate retirementتقاعد علي المعاش
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcualteAge(birthYear);
  const retirement = 65 - age;
  //should have return
  //solve the return negative
  if (retirement > 0) {
    console.log(`${firstName} retirement in ${retirement} ages`);
    return retirement;
    //not work because after return so should be before return
  } else {
    console.log(`${firstName} has already retirement`);
    return -1;
  }
  //return `${firstName} retirement in ${retirement} ages`;
};
//return negative values (خرج علي المعاش مش لسة هيخرج يلا نحل المشكلة دي)
console.log(yearsUntilRetirement(1991, "Amgad"));
console.log(yearsUntilRetirement(1970, "Ahmed"));

const friend1 = "Mohamed";
const friend2 = "Amgad";
const friend3 = "Hamdy";
//Arrays creation
const friends = ["Mohamed", "Amgad", "Hamdy"];
console.log(friends);
const years = new Array(2002, 2003, 2004, 2005);
console.log(years);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
const firstName = "jonas";
const jonas = [firstName, "amgad", "teacher", 2037 - 1991, friends];
console.log(jonas);
const calcualteAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsAge = [1990, 1967, 2002, 2010, 2018];
//Nan not all array specific element
console.log(calcualteAge(yearsAge));
const age1 = calcualteAge(yearsAge[0]);
const age2 = calcualteAge(yearsAge[1]);
const age3 = calcualteAge(yearsAge[yearsAge.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcualteAge(yearsAge[0]),
  calcualteAge(yearsAge[1]),
  calcualteAge(yearsAge[yearsAge.length - 1]),
];
console.log(ages);
const friends = ["Mohamed", "Amgad", "Hamdy"];
//push add element to the end of array
const newLenght = friends.push("Hamody");
console.log(friends);
console.log(newLenght);
//unshift add element to the start of array
friends.unshift("misho");
console.log(friends);
//pop delete element from the last array opposite of push
const popped = friends.pop();
console.log(popped);
console.log(friends);
//shift remove first element opposite unshift
const shift = friends.shift();
console.log(shift);
console.log(friends);
//index of specific element index of element if found -1 if not found
console.log(friends.indexOf("Amgad"));
console.log(friends.indexOf("misho"));
// make sure value include in array or no by using includes function return true if find return fals if not using strick equality
console.log(friends.includes("Amgad"));
console.log(friends.includes("misho"));
friends.push("23");
friends.push(23);
console.log(friends.includes(23)); //return false 23 as string not equal number
//return now true
//we can use it in conditions
//should the condition be true to console.log
if (friends.includes("Amgad")) {
  console.log("Amgad Top ");
}
////////////////////////////////////////
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its 
  capital city is ${capitalCity}`;
}
const country1 = describeCountry("Finland", 6, "Helsinki");
const country2 = describeCountry("America", 8, "washenton");
const country3 = describeCountry("Germany", 10, "berline");
console.log(country1);
console.log(country2);
console.log(country3);
////////////////////////////////////////
//function decleration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populationFirstFun1 = percentageOfWorld1(1441);
const populationFirstFun2 = percentageOfWorld1(2000);
const populationFirstFun3 = percentageOfWorld1(3000);
console.log(populationFirstFun1);
console.log(populationFirstFun2);
console.log(populationFirstFun3);
//function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const populationSecoundFun1 = percentageOfWorld2(1441);
const populationSecoundFun2 = percentageOfWorld2(2000);
const populationSecoundFun3 = percentageOfWorld2(3000);
console.log(populationSecoundFun1);
console.log(populationSecoundFun2);
console.log(populationSecoundFun3);
//Arrow funcuion
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const populationThirdFun1 = percentageOfWorld2(1441);
const populationThirdFun2 = percentageOfWorld2(2000);
const populationThirdFun3 = percentageOfWorld2(3000);
console.log(populationThirdFun1);
console.log(populationThirdFun2);
console.log(populationThirdFun3);
const describePopulation = function (country, population) {
  const populationPercentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, 
  which is about ${populationPercentage}% of the world`;
};
const describePopulation1 = describePopulation("Egypt", 120);
const describePopulation2 = describePopulation("China", 1441);
const describePopulation3 = describePopulation("America", 300);
console.log(describePopulation1);
console.log(describePopulation2);
console.log(describePopulation3);
//////////////////////////////////////////////
const population = [10, 1441, 332, 83];
console.log(population);
const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];
console.log(percentages);
const neighbours = ["Norway", "Sweden", "Russia"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
const index = neighbours.indexOf("Sweden");
neighbours[index] = "Republic of Sweden";
console.log(neighbours);
/////////////////////////////////////////
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//object
//pair (key-value)
const jonas = {
  firstName: "Mohamed",
  lastName: "Amgad",
  age: 2037 - 1991,
  job: "front end",
  friends: ["Mohamed", "Amgad", "Hamdy"],
};
console.log(jonas);
console.log(jonas.firstName);
console.log(jonas["firstName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
////////////////////////////////////////
const interestedIn = prompt(
  "What do you want to know about jonas? choose between firstName,lastName,age,job and friends"
);
// if use input other thing will input output
//console.log(jonas[interestedIn]);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName,lastName,age,job,and friends"
  );
}
jonas.location = "Egypt";
jonas.email = "mishomishmish2@gmail.com";
console.log(jonas);
const challange = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(challange);

//////////////////////////////////////////////////////////////////////////////////
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: 3,
};

/*
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.' 
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation.
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries 
and a capital called ${myCountry.capital}.`);
myCountry.population = 8;

console.log(myCountry.population);
myCountry["population"] = 10;
console.log(myCountry.population);

const jonas = {
  firstName: "Mohamed",
  lastName: "Amgad",
  birthYear: 1991,
  job: "front end",
  friends: ["Mohamed", "Amgad", "Hamdy"],
  hasDriversLicense: false,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has a" : "has not a"
    } driver's license`;
  },
};
//شبه اللي فوق ولكن الفرق ان دي regular value ولكن اللس فوق property
//وكمان منغير داتا تايب const ,بدل =تبقي :
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
console.log(jonas.calcAge());
//console.log(jonas["calcAge"](1991));
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());

//challenge-3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
}
/*
1.Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property

*/
/*
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.checkIsland();
myCountry.describe();
console.log(myCountry.isIsland);
*/
///////////////////////////////////////loop
//for loop keep runing while condition is True
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }
/*
There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/
// for (let rep = 1; rep <= 50; rep++) {
//   console.log(`Voter number ${rep} is currently voting`);
// }
//////////////////////////////////////
// const jonas = [
//   "Mohamed",
//   "Amgad",
//   2037 - 1991,
//   "front end",
//   ["Mohamed", "Amgad", "Hamdy"],
//   true,
// ];
// //using loop to show the array element and this type of each element
// console.log(jonas.length);
// //make empty array to hold on type of first array
// const types = [];
// for (let i = 0; i < jonas.length; i++) {
//   //reading from the array
//   console.log(jonas[i], typeof jonas[i]);
//   //use array to add element in the array
//   //first way
//   // types[i] = typeof jonas[i];
//   //second way of add element to array using push not unshift because push add in the end 1 2 3 4 5 but unshift add in first 5 4 3 2 1 not need this

//   types.push(typeof jonas[i]);
// }
//////////////////////////////////////////////////////////////
// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
/////////////////////////////////////////////////////
// continue,break
//let's start with continue
// console.log("--- only strings---");
// for (let i = 0; i < jonas.length; i++) {
//   //reading from the array
//   //ياعم عدي ياعم عدي هيفكس للاترشن دي ويروح للي بعدها
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// console.log("--- break after number---");
// for (let i = 0; i < jonas.length; i++) {
//   //reading from the array
//   //طب سلام عليكم بقي انا خارج برة اللوب بقي
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }
///////////////////////////////////////////////////////////
// const jonas = [
//   "Mohamed",
//   "Amgad",
//   2037 - 1991,
//   "front end",
//   ["Mohamed", "Amgad", "Hamdy"],
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }
// for (let i = 1; i < 4; i++) {
//   console.log(`----starting exercise ${i}----`);
//   for (let j = 1; j < 6; j++) {
//     console.log(`Exercise ${i}:lifting weight repetition ${j}`);
//   }
// }
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   return average;
// };
// const averageTotal = calcAverage(totals);
// console.log(averageTotal);

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is
// const populations = [10, 1441, 332, 83];
// const percentages2 = [];
// //function decleration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }
// console.log(percentages2);
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?
// const populations = [10, 1441, 332, 83];
// const percentages3 = [];
// //function decleration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// let counter = 0;
// while (counter < populations.length) {
//   const perc = percentageOfWorld1(populations[counter]);
//   percentages3.push(perc);
//   counter++;
// }
// console.log(percentages3);
