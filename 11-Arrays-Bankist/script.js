'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;
  mov.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}
    </div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
const calcDisplaySummarry = function (acc) {
  const incomes = acc.movements
    .filter(movement => movement > 0)
    .reduce((acc, movement) => acc + movement);
  labelSumIn.textContent = `${incomes}€`;
  const withdrawal = acc.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;
  const interst = acc.movements
    .filter(movement => movement > 0)
    .map(movement => (movement * acc.interestRate) / 100)
    .filter(movement => movement >= 1)
    .reduce((acc, movement) => acc + movement);
  labelSumInterest.textContent = `${interst}€`;
};
const user = 'Steven Thomas Williams';
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(element => element[0])
      .join('');
  });
};
createUsernames(accounts);
const updateUi = function (account) {
  //Display movements
  displayMovement(account.movements);
  //Display balance
  calcDisplayBalance(account);
  //Display summary
  calcDisplaySummarry(account);
};
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display Ul and welcome message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
    //Update UI
    updateUi(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => inputTransferTo.value === acc.userName
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUi(currentAccount);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    inputCloseUsername.value = inputClosePin.value = '';
    //Delete Account
    accounts.splice(index, 1);
    labelWelcome.textContent = 'Log in to get started';
    //Hide Ui
    containerApp.style.opacity = 0;
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(loanAmount);
    //Update Ui
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// console.log(arr.slice(2)); //['c', 'd', 'e']
// console.log(arr.slice(2, 4)); //['c', 'd']
// console.log(arr.slice(-2)); //['d', 'e']
// console.log(arr.slice(-1)); //['e']
// console.log(arr.slice(1, -2)); //['b', 'c']
// console.log(arr.slice()); //===>shallow copy
// console.log([...arr]); //===>shallow copy

//splice
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

//Reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//Concat
// const letter = arr.concat(arr2);
// console.log(letter);

//Join
// console.log(letter.join('-'));
//////////////////////////////////////////////////////////////////////////
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// //getting last  array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
///////////////////////////////////////////////////////////////////////////
//forEach for array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----For Eeach ----');
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
//0:function(200)
//1:function(450)
//2:function(-400)
//////////////////////////////////////////////////////////////////////////////
//forEach for map or set
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// for (const [key, value] of currencies) {
//   console.log(key, value);
// }
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// const currenciesSet = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// //value same key because don't have any key or index
// currenciesSet.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });
/*
Coding Challenge #1 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old. 
Your tasks: 
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things: 
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters) 
2. Create an array with both Julia's (corrected) and Kate's data 
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
 4. Run the function for both test datasets 
Test data: 
") 
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] 
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] 
Hints: Use tools from all lectures in this section so far 
GOOD LUCK 
*/
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrect = dogsJulia.slice();
//   dogsJuliaCorrect.splice(0, 1);
//   dogsJuliaCorrect.splice(-2);
//   console.log(dogsJuliaCorrect);
//   const dogs = dogsJuliaCorrect.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (element, index) {
//     if (element >= 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${element} years old`
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
/////////////////////////////////////////////////////////////////////////////////////
//Map
// const eruToUsd = 1.1;
// const movementUSD = movements.map(function (movement) {
//   return movement * eruToUsd;
// });
// const movementUSD = movements.map(movement => movement * eruToUsd);
// console.log(movements);
// console.log(movementUSD);
// const movementsUSDFor = [];
// for (const movement of movements) {
//   movementsUSDFor.push(movement * eruToUsd);
// }
// console.log(movementsUSDFor);
// const movementDescription = movements.map((movement, i) => {
//   if (movement > 0) {
//     return `Movement ${i + 1}: You deposited ${movement}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
//   }
// });
// const movementDescription = movements.map(
//   (movement, i) =>
//     `Movement ${i + 1}: You ${
//       movement > 0 ? 'deposited' : 'withdrew'
//     } ${movement}`
// );
// console.log(movementDescription);
/////////////////////////////////////////////////////////////////////////////////////
//Filter
// const deposits = movements.filter(function (movement, index, arr) {
//   return movement > 0;
// });
// console.log(movements);
// console.log(deposits);
// const depositsFor = [];
// for (const movement of movements) {
//   if (movement > 0) {
//     depositsFor.push(movement);
//   }
// }
// console.log(depositsFor);
// const withdrawal = movements.filter(movement => movement < 0);
// console.log(withdrawal);
/////////////////////////////////////////////////////////////////////////////////////
//Reduce
//acc==>accumulator==>snowball
// console.log(movements);
// const balance = movements.reduce(function (acc, movement, index, arr) {
//   console.log(`iteration ${index}: ${acc}`);
//   return acc + movement;
// }, 0);
// console.log(balance);
// let balance2 = 0;
// for (const movement of movements) {
//   balance2 += movement;
// }
// console.log(balance2);
// const max = movements.reduce(function (acc, movement) {
//   if (acc > movement) {
//     return acc;
//   } else {
//     return movement;
//   }
// }, movements[0]);
// console.log(max);
/*
Coding Challenge #2 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study. 
Your tasks: 
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order: 
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4 
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old) 
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages) 
4. Run the function for both test datasets 
Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 
GOOD LUCK 
*/
// const calcAverageHumanAge = function (ages) {
//   const humanages = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // console.log(humanages);
//   const adults = humanages.filter(age => age >= 18);
//   // console.log(adults);
//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   // console.log(average);
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
////////////////////////////////////////////////////////////////////////
//The Magic of chaining Method
// const eruToUsd = 1.1;
// const total = movements
//   .filter(movement => movement > 0)
//   .map((movement, index, arr) => {
//     console.log(arr);
//     movement * eruToUsd;
//   })
//   // .map((movement) => movement * eruToUsd)
//   .reduce((acc, movement) => acc + movement, 0);
// console.log(total);
/*
Coding Challenge #3 
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining! 
Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 
GOOD LUCK 
*/
// const calcAverageHumanAge = function (ages) {
//   const average = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
/////////////////////////////////////////////////////////////////////////////////////
//Find Method ==>retrieve one element of an array based on condition
// const firstWithdrawal = movements.find(movement => movement < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(accounts);
// console.log(account);
// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') {
//     console.log(account);
//   }
// }
// console.log(movements);
// //Equality
// console.log(movements.includes(-130));
//Condition
//some method
// const anyDeposite = movements.some(mov => mov > 0);
// console.log(anyDeposite); //true
//Every method
// console.log(movements.every(mov => mov > 0)); //false
//can separate callback function
// const deposite = mov => mov > 0;
// const anyDeposite = movements.some(deposite);
// console.log(anyDeposite); //true
// console.log(movements.every(deposite)); //false
//Flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); //[1,2,3,4,5,6,7,8]
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));
//sort
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(movements);
//return<0 a,b
//return>0 b,a
//1 keep order
//-1 switch order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// );
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//   })
// );
// console.log(movements.sort((a, b) => a - b));
// console.log(movements.sort((a, b) => b - a));
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBallance = allMovements.reduce((acc, mov) => acc + mov);
// console.log(overallBallance);
// const overallBallance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov);
// console.log(overallBallance);
//FlatMap
// const overallBallance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov);
// console.log(overallBallance);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// console.log(new Array([1, 2, 3, 4, 5, 6, 7, 8]));
//Empty arrays+fill method
// const x = new Array(7);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);
// x.fill(1);
// console.log(x);
// arr.fill(23, 2, 6);
// console.log(arr);
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// labelBalance.addEventListener('click', function () {
//   const movementUi = Array.from(
//     document.querySelectorAll('.movements__value'),
//     ele => Number(ele.textContent.replace('€', ''))
//   );
//   console.log(movementUi);
//   const movmentUi2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movmentUi2);
// });
//More Examples
//1.
// const alldeposits = accounts
//   .flatMap(account => account.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, curr) => sum + curr);
// console.log(alldeposits);
//2.
// const numberdeposits1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(mov => mov >= 1000).length;
// const numberdeposits1000 = accounts
//   .flatMap(account => account.movements)
//   .reduce((counter, mov) => (mov >= 1000 ? (counter = ++counter) : counter), 0);
// console.log(numberdeposits1000);
//3.
// const sums = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (sums, curr) => {
//       // curr > 0 ? (sums.deposite += curr) : (sums.withdraw += curr);
//       sums[curr > 0 ? 'deposite' : 'withdraw'] += curr;
//       return sums;
//     },
//     { deposite: 0, withdraw: 0 }
//   );
// console.log(sums);
// const { deposite, withdraw } = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (sums, curr) => {
//       // curr > 0 ? (sums.deposite += curr) : (sums.withdraw += curr);
//       sums[curr > 0 ? 'deposite' : 'withdraw'] += curr;
//       return sums;
//     },
//     { deposite: 0, withdraw: 0 }
//   );
// console.log(deposite, withdraw);
//4.
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
/*
Coding Challenge #4 
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little. 
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite. 
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint). 
Your tasks: 
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg) 
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose)  
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle'). 
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!" 
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false) 
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false) 
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.) 
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects ) 
25 
The Complete JavaScript Course 
Hints: 
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them 
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion. 
Test data: 
const dogs = [ 
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
{ weight: 8, curFood: 200, owners: ['Matilda'] }, 
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
{ weight: 32, curFood: 340, owners: ['Michael'] }, 
]; 
GOOD LUCK 
*/
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
//1.
// dogs.forEach(
//   dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
// );

//2.
// const saraDogObject = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(saraDogObject);
// console.log(
//   `Sarah's dog is eating too ${
//     saraDogObject.curFood > saraDogObject.recommendedFood ? 'much' : 'little'
//   }`
// );

//3.
// console.log(dogs);
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

//4.
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
//5.
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
//6.
// const eatingGood = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.some(eatingGood));
/*
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.) 
*/
// const dogseatingWellArray = dogs.filter(eatingGood);
// console.log(dogseatingWellArray);
/*
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects ) 
*/
// const shallowCopyDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(shallowCopyDogs);
