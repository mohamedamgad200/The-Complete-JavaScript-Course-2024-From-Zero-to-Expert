'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from  ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(38);
  console.log(output);
}

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //order method accept two parameter one index of starter mwnu and mainmenu
  //give the index of eat menu we don't make destructure
  //es6 feature
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time, address, starterIndex, mainIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza(mainIngrediant, ...otherIngrediant) {
    console.log(mainIngrediant);
    console.log(otherIngrediant);
  },
};

//object destructuring
//we need to write the same property names here to now extract variables from the object
//we don't need to skip element same the array so we can simply write property we need
//order of the element don't matter
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//variable name different property
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
//default value
//remember it if acess property not in the object it will be undefined
// const { menu, starterMenu } = restaurant;
// console.log(menu, starterMenu);
//menu undefined not a property in object
//default values
// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);
//we need to talk muteated variables while destructuring object
//it literly different array
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };
//error شايفها بلوك
// {a,b}=obj
//put it in prenteces()
// ({ a, b } = obj);
// console.log(a, b);
//object inside object openninghoure inside days with open close
// const { fri } = openingHours;
// console.log(fri);
// const {
//   openingHours: { fri },
// } = restaurant;
// console.log(fri);
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(open, close);
// console.log(o, c);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
///////////////////////////////////////////////////////////
//retreive each one to variable without destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//with destructuring
//we can actually decleare all three variables at the same time
//we have square brakets becasue we destructuring the array
//x=arr[0],y=arr[1],z=arr[2]
//const [x, y, z]  destructure it is like array but this is not
//should decleare it use const
// const [x, y, z] = arr;
// console.log(x, y, z);
//if we make destructuring the orginal array not affected
// console.log(arr);
//first and second element with destructure
// const [first, second] = restaurant.categories;
// console.log(first, second);
//first and third element with destructure we make hole (space ,)to skip second and third
// const [first, , third] = restaurant.categories;
// console.log(first, third);
//the owner of resturant want to switch the main and second category
//first=secondry=Vegetarian and second =first=Italian
//make it let
//we cant make it without temp because we will make overwrite to the values
// let [main, , third] = restaurant.categories;
// console.log(main, third);
// const temp = main;
// main = third;
// third = temp;
// console.log(main, third);
//with destructuring it will be easier
// [main, third] = [third, main];
// console.log(main, third);
//we can have function return array and then we can immediatly destruct the result into different variable
//and so basically allow us to return multiple values from a function
//we here make destructure for this function return array
// console.log(restaurant.order(2, 0));
//recieve 2 return value from function
// const [starterMenu, mainMenu] = restaurant.order(2, 0);
// console.log(starterMenu, mainMenu);
//nested array
// const nested = [3, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //5,6
//id we want to take indevidual item we should make destructure inside destructure
//nested destructure
// const [m, , [k, l]] = nested;
// console.log(m, k, l); //3,5,6
/*we can also set a default values for the variables when we are extracting them and that's gonna be very useful in this case 
(that's we don't know the length of the array)
this can sometimes happen in real world applications as we see later
so if we have an array that is shorter than we might think then we might try to unpack the array in position that don't even exist
*/
//default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
//p=8
//q=9
//r=undefined ببساطة مش لاقيها الاراي دي فيه 2 بس مش 3 فبالتالي غير معرف
// const [p, q, r] = [8, 9];
//default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
//p=8
//q=9ببساطة لقيت فاليو اخده بيس شيل الديفولت واعمل
//r=1
// وببساطة لقيت فاليو اخده بيس شيل الديفولت واعمل اوفررايت وحط الجديد لو لا الديفولت زي ما هو
///////////////////////////////////////////////////////////////////
//the spread operator(....)
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);
//spread operator
// const goodArr = [1, 2, ...arr];
//array inside array
// const goodArr = [1, 2, arr];
// console.log(goodArr);
//console log individual element in array
// console.log(...goodArr);
//add a item in new menu and old items menus
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// const str = 'Jonas';
// const letter = [...str, ' ', 's.'];
// console.log(letter);
// console.log(...str);
// console.log(`${...str} name`);//error only in make a new array or pass argument to function
//real time example
// const ingrediant = [
//   prompt("let's make pasta! Ingrediant 1?"),
//   prompt('Ingrediant 2?'),
//   prompt('Ingrediant 3?'),
// ];
// console.log(ingrediant);
// restaurant.orderPasta(ingrediant[0], ingrediant[1], ingrediant[2]);
// restaurant.orderPasta(...ingrediant);
//iterables==>arrays,maps,strings,sets==>Not a object
//object
// const resturantNew = {
//   fiunderIn: 1991,
//   ...restaurant,
//   founder: 'Guiseppe',
// };
// console.log(resturantNew);
// const resturantCopy = { ...restaurant };
// resturantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(resturantCopy.name);
//////////////////////////////////////////////////
//1) destructuring
//spread operator because it right hand side of assigment operator =
// const arr = [1, 2, ...[3, 4]];
//rest patern because it left hand side of assigment operator =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
/*
rest patern include all after the last element (risotto)
not include the skip element
must be the last in destructuring assigment because otherwise how will js know
until when it should collect the rest of the array there can only be one rest
in any destructuring assigment
*/
// console.log(pizza, risotto, otherFood);
////////////////////////////////////////
//objects
// const { sat, ...weakdays } = restaurant.openingHours;
// console.log(sat, weakdays);
/////////////////////////////////////////////
//2)function
//collect all of it in the array
/*
make this function take both 
array and single values without a specidic number of prameter
*/
// const add = function (...number) {
//   // console.log(number);
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// };
// add(1, 2);
// add(3, 4, 5, 6);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);
// const x = [1, 2, 3];
// add(...x);
// restaurant.orderPizza('mushrome', 'onion', 'olives', 'spinach');
/////////////////////////////////////////////////////////////
//short circuiting(|| and &&)
//Use any datatype, return any datatype,short circuiting
/*
if the first is first operand is truthy here in the oR operator then the other operand
will not be even evaluated so javascript  will not even take a look at it  and that what we mean
short circuiting
*/
// console.log('-----OR-----');
// //3 trusly out it
// console.log(3 || 'Jonas');
// //'' falsy and jonas trusly out it
// console.log('' || 'Jonas');
// //'' true trusly out it
// console.log(true || 0);
// //undefined and null falsely out null
// console.log(undefined || null);
// //undefined and 0 and '' falsely Hello truly out it
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// restaurant.numberGuests = 23;
// const guests1 = restaurant.numberGuests ? restaurant.numberGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numberGuests || 10;
// console.log(guests2);
// console.log('-----AND-----');
/*
if the first is first operand is falsey here in the and operator then the other operand
will not be even evaluated so javascript  will not even take a look at it  and that what we mean
short circuiting
*/
// console.log(0 && 'Jonas'); //0
// //if two trusly out the last true
// console.log(7 && 'Jonas'); //Jonas
//if we find first falsy return it
// console.log('Hello' && 23 && null && 'Jonas'); //null
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mashrom', 'spanish');
// }
// restaurant.orderPizza && restaurant.orderPizza('mashrom', 'spanish');
////////////////////////////////////////////////////
//Nullish Coalescing Operator (??)
// restaurant.numberGuests = 0;
// const guests = restaurant.numberGuests || 10;
// console.log(guests);
//Nullish==>Null,undefined(not 0 or '')
//لو ب null or undefined رجع الثانية غير كدة هيرجع الاولي
// const guestCorrect = restaurant.numberGuests ?? 10;
// console.log(guestCorrect);
///////////////////////////////////////////////////////////////////////////////////////////////
//Logical assigments operators(Es 2021)
const res1 = {
  name: 'capri',
  //numGuests: 20,
  numGuests: 0,
};
const res2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
//OR assigment operator
//same this res1.numGuests = res1.numGuests || 10;
// res1.numGuests ||= 10; //20 if numberGuests =10 set it to 10 because 0 falsy and 10 truslly return truslly//10
// res2.numGuests ||= 10; //10
//Nullish assigment operator
//if null or undefined set else no
// res1.numGuests ??= 10; //0
// res2.numGuests ??= 10; //10
//////////////////////////////////
// res1.owner = res1.owner && '<ANONYMOUS>'; //undefined
// res2.owner = res2.owner && '<ANONYMOUS>'; //ANONYMOUS
// res1.owner &&= '<ANONYMOUS>'; // مش هيتحط اصلا عشان هو undefined
// res2.owner &&= '<ANONYMOUS>'; //ANONYMOUS
// console.log(res1);
// console.log(res2);
///////////////////////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);
//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);
//3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1);
// console.log(draw);
// console.log(team2);
//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 2 is more likely to win');
///////////////////////////////////////////////////////////////////////////////////
//Looping array the for loop of (for each)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }
// for (const item of menu.entries()) {
//   // console.log(item); //array index and item
//   console.log(`${item[0] + 1}:${item[1]}`);
// }
// for (const [index, element] of menu.entries()) {
//   // console.log(item); //array index and item
//   console.log(`${index + 1}:${element}`);
// }
//array iterator
// console.log([...menu.entries()]);
/////////////////////////////////////////////////////////////////////////////
//optional chaining(?.)
// console.log(restaurant.openingHours.mon); //undefined
// console.log(restaurant.openingHours.mon.open); //error
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open); //زي كدة عايزين ن check
//with optional changing
// console.log(restaurant.openingHours.mon.open); //error
// console.log(restaurant.openingHours?.mon?.open); //if it null or undefined return undefined else return this output is undefined
// console.log(restaurant.openingHours.fri?.open); //if it null or undefined return undefined else return this output is 11
//Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day},we open at ${open}`);
// }
// console.log(restaurant.order?.(1, 0) ?? 'Method does not exist');
// console.log(restaurant.orderٌResoto?.(1, 0) ?? 'Method does not exist');
// const users = [
//   {
//     name: 'Amgad',
//     email: 'Amgad@gmail.com',
//   },
// ];
// console.log(users[0]?.name ?? 'usern not found');
// if (users.length > 0) console.log(users[0].name);
// else console.log('Array empty');
////////////////////////////////////////////////////////////////////
//looping over object ==>looping over property name(key) or values or both
//property name
// const properties = Object.keys(openingHours); //array of object keys
// console.log(properties); //['thu', 'fri', 'sat']
// let openStr = `we are open on ${properties.length}:`;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);
//property values
// const values = Object.values(openingHours);
// console.log(values);
//object entity
// const entities = Object.entries(openingHours);
// console.log(entities);
// for (const entity of entities) {
//   console.log(entity);
// }
//[key,value]
// for (const [key, { open, close }] of entities) {
//   console.log(`On ${key} we open at ${open} anf close at${close}`);
// }
/////////////////////////////////////////////////////////////////////
//challange
/*
Coding Challenge #2 
Let's continue with our football betting app! Keep using the 'game' variable from 
before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
} 
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2 
GOOD LUCK 
*/
//1. Loop over the game.scored array and print each player name to the console,along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let average = 0;
// for (const odd of Object.values(game.odds)) {
//   average += odd;
// }
// average /= Object.values(game.odds).length;
// console.log(average);
/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names
*/
// for (const [key, value] of Object.entries(game.odds)) {
//   // console.log(key, value);
//   const teamKey = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`Odd of ${teamKey} : ${value}`);
// }
/*
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
} 
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2 
*/
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
///////////////////////////////
//es6 datastructure {set,map}
//set==>>collection unique values داتا مش متكررة
//can never have duplicates
//pass iterable can be array
//unique and order of elements are irrelevent (set vs array)
// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'Risto',
//   'pasta',
//   'pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('amgad')); //iterable can be string
// console.log(new Set()); //can be empty
/*
 *****************sets functions ***********************
 */
// console.log(orderSet.size); //return size of set in array called length
// console.log(orderSet.has('pizza')); // if has this vlaue return true else false //true
// console.log(orderSet.has('Bread')); // if has this vlaue return true else false //false
// orderSet.add('Garlic Bread'); //add element in set
// orderSet.add('Garlic Bread'); //add element in set //unique add it once only
// console.log(orderSet);
// orderSet.delete('Risto'); //delete element in set and passing the value i wand to delete it
// orderSet.clear(); //delete all element in set
// console.log(orderSet);
// retrieve data from set
// console.log(orderSet[0]); //error set not indexing  set not have to retrieve data can use has method to make sure it has value or not if you want to use it to retrieve data use array
//iterable we can make this
// for (const order of orderSet) {
//   console.log(order);
// }
//best case of set it is remove duplicate values from array
//Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
// console.log(staff);
//we have a unique positions
//we want an array so eassy set is itreatable spread operation work in it
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
//numer of positions
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef']).size
// );
/////////////////////////////////////////////////////////
/*
 *********************** Maps ***************************
 */
//can use to map value to key like object data is stored in key value pairs in maps
//the different between the object and map the key can have any type this is can be huage in object key only string in maps we have any types of key that can be objects or arrays or other maps\
// const rest = new Map();
// rest.set('name', 'Classico Italiano'); //add element key,value in map
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Lisbon,Portugal')); //return the new array
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest.get('name')); //Get value by key and key should be the same data type
// console.log(rest.get(true)); //should be the same data type
// console.log(rest.get('true')); //undefined
// console.log(rest.get(1));
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// const question = new Map([
//   ['question', 'What is the best programming language in the  world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);
//convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
//Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));
///////////////////////
//convert map
// const mapArray = [...question];
//console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);
/*
Coding Challenge #3 
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
1. Create an array 'events' of the different game events that happened (no 
duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: 
⚽
 GOOD LUCK 
*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
1. Create an array 'events' of the different game events that happened (no 
  duplicates) 
*/
// const events = [...new Set(gameEvents.values())];
// console.log(events);
/*
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
*/
// gameEvents.delete(64);
// console.log(gameEvents);
/*
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
*/
// console.log(`An event happened, on
// average, every ${90 / gameEvents.size}`);
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on
// average, every ${time / gameEvents.size}`);
/*
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: 
⚽
*/
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
////////////////////////////////////////////////////////////////////////
// working with string
// 👀👀👀👀👀👀👀👀 Note that all string function case sensitive 👀👀👀👀👀👀👀👀
const airline = 'TAP Air Portugal';
//part 1
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r')); //6 first index character apper
// console.log(airline.lastIndexOf('r')); //10 last index character apper
// console.log(airline.indexOf('Portugal')); //8
// console.log(airline.indexOf('portugal')); //-1 case sensetive
//return substring start from  index 4 to end of main string
// console.log(airline.slice(4)); // Air Portugal
//return substring start from  index 4 to index 7 not includeed 4,5,6 only
// console.log(airline.slice(4, 7)); //Air end - begin ==>7-4=3 out 3 char
// console.log(airline.slice(8, 9)); //p
//first world start in begin index 0 and end at space
// console.log(airline.slice(0, airline.indexOf(' '))); //TAP
//last world start from space last index +1 to not included
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//last char negative
// console.log(airline.slice(-2)); //al
// console.log(airline.slice(1, -1)); //AP Air Portuga
// const checkMiddleSeat = function (seat) {
//   //B and E is the middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😏');
//   } else console.log('You got lucky 😎');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
//when call methods for string convert string primetive to string object behind the scenes after do method return to string
// console.log(new String('amgad')); //{amgad}==>a m g a d
// console.log(typeof new String('amgad')); //object
// console.log(typeof new String('amgad').slice(1)); //string
//part 2
//convert lowercase and uppercase
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
//fix capitalization in name
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passangerUpper =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passangerUpper);
//check email
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase(); //convert to lower case
// const trimmedEmail = lowerEmail.trim(); //delete all spaces
// console.log(trimmedEmail); //hello@jonas.io
//only one step
// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
//replacing
// const priceGB = '288,97£';
//replace two argument what i want to replace and what i want to put it instead of another
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); //replace first door only
// console.log(announcement.replaceAll('door', 'gate')); //don't work in es6 deleted
//using regulare expression to make and replace all door with gate
// console.log(announcement.replace(/door/g, 'gate')); //قبلها كلمة وبعدها كلمة وعلي المستوي ال globalيعني علي كله
// Booleans
// const plane = 'A320neo';
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); //include this //true
// console.log(plane.includes('Boeing')); //false
//if we make the palne name Airbus A320neo make it true
// console.log(plane.startsWith('Air')); //false تبدا  ب
//startwith تبدأ ب endwithتنتهي ب
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family'); //Part of the NEW ARirbus family
// }
// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife'); //You are NOT allowed on board
// checkBaggage('Socks and camera'); //Welcome aboard!
// checkBaggage('Got some snacks and a gun for protection'); //You are NOT allowed on board
//part 3
//split and join
// console.log('Mohamed Amgad'.split(' ')); //return array of string and split each  when find space
// console.log('a+very+nice+string'.split('+')); //split when find +تفصل كل لما تقابل ايه
// const [firstName, lastName] = 'Mohamed Amgad'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //افصل بينهم ب ايه ده اللي بتبصيه في البراميتر
// console.log(newName);
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');
//padding هتزود حاجات لحد لما توصل لطول معين
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+')); //first length after padding ,character want to padding with it
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));
//repeat بتبصيلها هتكررها كام مرة
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);
/*
Coding Challenge #4 
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase. 
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed. 
Test data (pasted to textarea, including spaces): 
underscore_case 
first_name 
Some_Variable  
calculate_AGE 
delayed_departure 
Should produce this output (5 separate console.log outputs): 
underscoreCase      
✅ 
firstName           
✅✅ 
someVariable        
✅✅✅ 
calculateAge        
✅✅✅✅ 
delayedDeparture    
✅✅✅✅✅ 
Hints: 
§ Remember which character defines a new line in the textarea 
§ The solution only needs to work for a variable made out of 2 words, like a_b 
§ Start without worrying about the 
name conversion working 
✅. Tackle that only after you have the variable  
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue! 
Afterwards, test with your own test data! 
GOOD LUCK 
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [firstName, secondName] = row.toLowerCase().trim().split('_');
//     const output = `${firstName}${secondName.replace(
//       secondName[0],
//       secondName[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });
/*
underscore_case 
first_name 
Some_Variable  
calculate_AGE 
delayed_departure 
*/
