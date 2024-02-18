/*
//Declare variable and assign value to it
let js = "amazing";
// if (js == "amazing") alert("Javascript is fun!");
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
//Declare variable and assign value to it
//datatype variableName=value;
let firstName = "Jonas";
//let firstName = "Matelda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
//if we change the value in firstName the console.log should be new value
//if i want to change the value of variable in all places just change the value assigned to variable
//name convention camelCase=first letter lower case in first word and all remaing words start with upper case
let first = "Jonas";
let firstNamePerson = "Jonas";
//variable can not start with number
//error
//let 3year=3;
//can contain numbers,letters,underscores or the doller sign\
//unexpected token &
//let Jonas&Matelda = "JM";
// solve it by under score
let Jonas_Matelda = "JM";
//not use a reserved keyword like new and funcion
//let function =1;
//solve this convension
let _function = 1;
//not illegal at all time but this is convension
//let name="amgad";
let secondName = "amgad";
//no name start with upper case
//constant all in uppercase
let PI = 3.1415;
//not start word in uppercase
let Person = "amgad"; // wrong
let person = "amgad"; //right
*/
// true;
// console.log(true);
//declaring a variable
// let JavascriptIsFun = true;
// console.log(JavascriptIsFun);
// console.log(typeof true);
// console.log(typeof JavascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "amgad");
//reassign new value for variable
// JavascriptIsFun = "Yes!";
// console.log(typeof JavascriptIsFun);
//un defined value variable with empty value
// let year;
// console.log(year);
// console.log(typeof year);
//reassign value for the variable so not be undefined
// year = 1990;
// console.log(year);
// console.log(typeof year);
// var job = "programmer";
// job = "teacher";
// const now=2037;
// const ageJonas = now - 1991;
// const ageMatelda = now - 2018;
// console.log(ageJonas,ageMatelda)
// console.log(ageJonas*2,ageJonas/2,2**3)
// const firstName="Jonas";
// const lastName="schmedtmann"
// //concatenate strings without space
// console.log(firstName+lastName);
// //make space between two string in concatenate
// let x=10+5;
// console.log(x);
// x+=10;//x=x+10; x=15+10=25
// console.log(x);
// x*=4;//x=x*4; x=25*4;
// x++;//increment value by 1
// console.log(x);
// x--;//decrement value by 1
// x--;//decrement value by 1
// console.log(x);
// console.log(ageJonas>ageMatelda);
// console.log(ageMatelda>=18);
// const fullAge=ageJonas>ageMatelda;
// console.log(fullAge);
// const markMass=95;
// const johnMass=85;
// const markHeigh=1.88;
// const johnHeigh=1.76;
// const markBmiFirstFormela=markMass/(markHeigh**2);
// const markBmiSecondFormela=markMass/(markHeigh*markHeigh);
// const johnBmiFirstFormela=johnMass/(johnHeigh**2);
// const johnBmiSecondFormela=johnMass/(johnHeigh*johnHeigh);
// console.log(markBmiFirstFormela,markBmiSecondFormela);
// console.log(johnBmiFirstFormela,johnBmiSecondFormela);
// if(markBmiSecondFormela>johnBmiSecondFormela)
// {
//     console.log(`Mark's BMI ${markBmiSecondFormela} is higher than John's ${johnBmiFirstFormela}`)
// }
// else
// {
//     console.log(`Mark's BMI ${johnBmiSecondFormela} is higher than John's ${markBmiFirstFormela}`)
// }

// const country="cairo";
// const continent="Africa";
// let population=10;
// const isIsland=false;
// let language;
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(population/2);
// population++;
// let bool=(population>6);
// console.log(bool);

// let bool2=(population<33);
// console.log(bool2);
//  let description =country+" " +"is in"+" "+continent+", and its"+" "+ population+" "+ "million people"+" "+ "speak"+" "+ language;
//  console.log(description);
//  let descriptionNew=`${country} is in ${continent}, and its ${population} million people speak ${language} `;
//  console.log(descriptionNew);
//  if(population>33)
//  {
//     console.log(`${country} population is above average`)
//  }
//  else
//  {
//     console.log(`${country} population is ${33-population} million below average`)
//  }
// const firstName="amgad";
// const job="front end";
// const birthYear=2002;
// const year=2023;
// const jonas="I'm "+firstName+" , a "+(year-birthYear)+" Years old "+job;
// console.log(jonas)
// const jonasNew=`I'm ${firstName}, a ${year-birthYear} year old ${job}! `;
// console.log(jonasNew);
// console.log("stringe \n\
// new\n\
// line");
// console.log(`line
// two
// three`)
// const age=19;
// const isOldEnough=age>=18;
// if(isOldEnough)//true so code executed
// {
//     console.log("Sarah can start driving licence🚗")
// }
// else
// {
//     const yearleft=18-age;
//     console.log(`Sarah is too young. wait another ${yearleft} years`)
// }
//Type convertion
// const inputValue='1991';
// console.log(inputValue+18);
// console.log(Number(inputValue)+18);
// const value=23;
// console.log(String(value));
// //type coercion
// console.log("I am " + 23 + " year old");
// console.log("23" - "10" - 3);
// console.log("23"*"2");
// console.log("23"/"2");
// //but if we did it it make it string
// console.log("23" + "10" + 3);
// let n ='1'+1;
// n-=1;
// console.log(n);
// console.log(Boolean(0));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean("jonas"));//true
// console.log(Boolean({}));//true
// const age=19;
// if(age===18)console.log("You just became an adult🤦‍♀️");
// const faviourit=Number(prompt("What's your faviourit number?"));
// console.log(faviourit);
// console.log(typeof faviourit);
// if(faviourit===23)
// {
//    console.log("cool! 23 is an amazing number!");
// }
// else if(faviourit===9)
// {
//    console.log("cool! 9 is an amazing number!");
// }
// else if(faviourit===7)
// {
//    console.log("cool! 7 is an amazing number!");
// }
// else
// {
//     console.log("Number is not 9 or 23 or 7");
// }
// if(faviourit !== 23)
// {
//     console.log("Not be 23!");
// }
// const hasDriversLicense=true;
// const hasGoodVision=true;
// console.log(hasDriversLicense&&hasGoodVision);
// console.log(hasDriversLicense||hasGoodVision);
// console.log(!hasDriversLicense);
// if(hasDriversLicense&&hasGoodVision)
// {
//     console.log("sara can drive")
// }
// else
// {
//     console.log("sara can't  drive")
// }

// const day="monday"
// switch(day)
// {
//     case "monday":
//         console.log("plan course structure");
//         console.log("Go to coding metup");
//         break;
//     case "tuesday":
//         console.log("Preper theory video");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day");
// }
// //if else convert
// if(day==="monday")
// {
//     console.log("plan course structure");
//     console.log("Go to coding metup");
// }
// else if(day==="tuesday")
// {
//     console.log("Preper theory video");
// }
// else if(day==="wednesday"||day==="thursday")
// {
//     console.log("Write code examples");
// }
// else if(day==="saturday"||day==="sunday")
// {
//     console.log("Enjoy the weekend");
// }
// else if(day==="friday")
// {
//     console.log("Record videos");
// }
// else
// {
//     console.log("Not a valid day");
// }
//ternary
// const age=23;
// const drink=age>=18 ? "wine🍷":"water🧊";
// console.log(drink);
//noramal if else
// let drinkSecond;
// if(age>=18)
// {
//     drinkSecond="wine🍷";
// }
// else
// {
//     drinkSecond="water🧊";
// }
// console.log(drinkSecond);
// console.log(`I have to take ${age>=18 ? "wine🍷":"water🧊"}`);
// const bill=275;
// let tip;
// if(bill>=50&&bill<=300)
// {
//     tip=bill*0.15;
// }
// else
// {
//     tip=bill*0.20;
// }
// const  tip=bill>=50&&bill<=300?bill*0.15:bill*0.20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill+tip}`);
// const numNeighbours = prompt(
//   "How many neighbour countries does your country How many neighbour countries does your country have?"
// );
//== work because it not same type but same value
//=== not work because should same type and same value make convert input from string to number to work well
// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// const country = "America";
// const countryLanguage = "english";
// const isIsland = false;
// const population = 40;
// if (countryLanguage === "english" && !isIsland && population < 50) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country}  does not meet your criteria`);
// }
// const language = "arabic";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too");
// }
// const population = 40;
// console.log(
//   `Portugal's population ${population > 33 ? "above" : "below"} average`
// );
