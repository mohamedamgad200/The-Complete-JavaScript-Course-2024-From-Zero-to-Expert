'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-09-12T14:43:26.374Z',
    '2024-09-17T18:49:59.371Z',
    '2024-09-18T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2024-08-10T14:43:26.374Z',
    '2024-09-17T18:49:59.371Z',
    '2024-09-18T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const second = String(Math.trunc(time % 60)).padStart(2, 0);
    //In each call,print the remaining timer ui
    labelTimer.textContent = `${min}:${second}`;
    //when 0 seconds ,stop timer and logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  //set time to 5 minutes
  let time = 120;
  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
const formatcur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (day1, day2) =>
    Math.round(Math.abs(day2 - day1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formmatedMovements = formatcur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formmatedMovements}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatcur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatcur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatcur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatcur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;
//fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Create time and date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locate = navigator.language;
    // console.log(locate);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
  //Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0); //true
// //Base 10 0 to 9 1/10=0.1 3/10=0.33333333
// //Base 2 0 to 1
// //js have problem with fraction
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //false
// //convert to number
// console.log(Number('23')); //23
// console.log(+'23'); //==>type corretion 23

// //parsing
// //not work if number not in start
// //1.parseInt
// console.log(Number.parseInt('30px', 10)); //==>30  second parameter regrex 10 0-9 2 0-2
// console.log(Number.parseInt('e26', 10)); //==>NAN  second parameter regrex 10 0-9 2 0-2
// //1.parseFloat
// console.log(Number.parseFloat('2.3rem')); //2.3
// console.log(Number.parseInt('2.3rem')); //2
// // console.log(parseInt('30px', 10));

// //isNaN
// console.log(Number.isNaN(23)); //false
// console.log(Number.isNaN('23')); //false
// console.log(Number.isNaN(+'23x')); //true
// console.log(Number.isNaN(23 / 0)); //false

// //Checking if value is number
// console.log(Number.isFinite(23)); //true
// console.log(Number.isFinite('23')); //false
// console.log(Number.isFinite(+'23x')); //false
// console.log(Number.isFinite(23 / 0)); //false

// console.log(Number.isInteger(23)); //true
// console.log(Number.isInteger(23.0)); //true
// console.log(Number.isInteger(23 / 0)); //false

/////////////////////////////////////////////////////////////////
// console.log(Math.sqrt(25)); //5
// console.log(25 ** (1 / 2)); //5
// console.log(8 ** (1 / 3)); //2

// console.log(Math.max(5, 18, 23, 11, 2)); //23
// console.log(Math.max(5, 18, '23', 11, 2)); //23 type corretion
// console.log(Math.max(5, 18, '23px', 11, 2)); //NaN not praseInt

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// //0.....1 -> 0....(max-min)->min.......max
// console.log(randomInt(10, 20));
// //Rounding function
// console.log(Math.trunc(23.3)); //23 retuen integer value
// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.9)); //24

// //Round Up
// console.log(Math.ceil(23.3)); //24
// console.log(Math.ceil(23.9)); //24

// //Round down
// console.log(Math.floor(23.3)); //23
// console.log(Math.floor(23.9)); //23
// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));
// console.log(Math.floor(23.3));
//Rounding decimal
// console.log((2.7).toFixed(0)); //return string 3
// console.log((2.7).toFixed(3)); //return string 2.700
// console.log((2.345).toFixed(2)); //return string 2.35
// console.log((2.345).toFixed(2)); //return string 2.35
// console.log(5 % 2); //1;
// console.log(5 / 2); //2+2+1==>5 (2.5)

// console.log(8 % 3);
// console.log(8 / 3); //2*3(6)+2 (3.5)

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);
// //check even or odd using reminder
// const isEven = n => n % 2 === 0;

// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

// const diameter = 287_460_000_000;
// console.log(diameter); //287460000000

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1); //1500
// console.log(transferFee2); //1500

// const PI = 3.1415;
// console.log(Number('230_000')); //NaN
// console.log(parseInt('230_000')); //230

//Big int
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(36836368368369836981369869831698369863979656986958n);
// console.log(BigInt(3683636836836));

// console.log(1000n + 1000n);
// console.log(579437994964964964964949964n * 95959779n);
// const huge = 57874884684568956896895465468n;
// const num = 20;
// console.log(Math.sqrt(huge));//notwork
// console.log(huge * num);//error
// console.log(huge * BigInt(num));
// //Exceptions
// console.log(20n > 15);
// console.log(20n > 15);
// console.log(20n === 20); //false different type bigint and  number
// console.log(typeof 20n);
// console.log(20n == 20); //true

//Divisions
// console.log(10n / 3n); //only integervalue with n no fraction
// console.log(10 / 3);

//Dates Times
// const now = new Date();
// console.log(now);
// console.log(new Date('Sep 18 2024 14:56:55'));
// console.log(new Date('December 24,2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear()); //==>getYear
// console.log(future.getMonth()); //get month zero based
// console.log(future.getDate()); //==>get day
// console.log(future.getDay()); //=>number of day in week zero base
// console.log(future.getHours()); //number of hours
// console.log(future.getMinutes()); //number of minutes
// console.log(future.getSeconds()); //number of seconds
// console.log(future.toISOString()); //greate string for date
// console.log(future.getTime()); //==>timestamp
// console.log(Date.now()); //==>now timestamp
// future.setFullYear(2024);
// console.log(future);

//Dates calculations
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);
// const calcDaysPassed = (day1, day2) =>
//   Math.abs(day2 - day1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

// Internationalizing Numbers (Intl)
// const num = 3884764.23;
// const options = {
//   style: 'currency', //percentage unit
//   unit: 'celsius', //وحدة القياس
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
//settimeout
// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
//   3000,
//   ...ingredients
// );
// console.log('Waitting..');
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// //setintervals
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 3000);
