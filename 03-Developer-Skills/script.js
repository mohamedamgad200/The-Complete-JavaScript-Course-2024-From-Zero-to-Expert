// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const age = birthYear => 2037 - 1991;
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [-2, -6, -1, 9, 15, 14, 9, 5];
// const calcTempAmplitude = function (temperatures) {
//   //افترضت ان الاول ده max,min
//   let max = temperatures[0];
//   let min = temperatures[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     //لو هو مش نمبر يعم عدي عدي
//     if (typeof temperatures[i] !== 'number') continue;
//     //هقارن الاول بالثاني يعني min الحالي وmaxالحالي بالي بعده
//     const currenttemp = temperatures[i];
//     // لو اقل من اللي بعده يبقي اللي بعده ده الماكس الجديد
//     if (max < currenttemp) {
//       max = currenttemp;
//     }
//     // لو اكبر من اللي بعده يبقي اللي بعده ده الmin الجديد
//     if (min > currenttemp) {
//       min = currenttemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// console.log(calcTempAmplitude(temperatures));
////////////////////////////////////////////////////////////////////////
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
// const calcTempAmplitude2 = function (temperatures1, temperatures2) {
//   const total = temperatures1.concat(temperatures2);
//   //افترضت ان الاول ده max,min
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < total.length; i++) {
//     //لو هو مش نمبر يعم عدي عدي
//     if (typeof total[i] !== 'number') continue;
//     //هقارن الاول بالثاني يعني min الحالي وmaxالحالي بالي بعده
//     const currenttemp = total[i];
//     // لو اقل من اللي بعده يبقي اللي بعده ده الماكس الجديد
//     if (max < currenttemp) {
//       max = currenttemp;
//     }
//     // لو اكبر من اللي بعده يبقي اللي بعده ده الmin الجديد
//     if (min > currenttemp) {
//       min = currenttemp;
//     }
//   }

//   console.log(max, min);
//   return max - min;
// };
//A)Identify Bug
// console.log(calcTempAmplitude2([3, 5, 1], [9, 4, 5]));
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
// arr.length;
// function findOdd(A) {
//   //happy coding!
//   if (A.length === 1) {
//     return A[0];
//   } else {
//     for (let i = 0; i < A.length; i++) {
//       let count = 0;
//       for (let j = 0; j < A.length; j++) {
//         if (A[i] === A[j]) {
//           count++;
//         }
//       }
//       if (count % 2 !== 0) {
//         return A[i];
//       }
//     }
//   }
// }
// console.log(findOdd(arr));
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
///////////////////////////////////////////////////
//Depuging lecture
//Bug
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     //C) Fix bug Solvebug by conver the return of prompt to number
//value: Number(prompt('Degrees Celsius')),
//     value: 10,
//   };

//value is the string beacuse the prompet always return string should be converted to number if you want to amke a mathmatical
//console.log(measurement);
//nice table to show object very good in big object
//B) Findbug
//   console.table(measurement);
//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //A)Identify Bug
// console.log(measureKelvin());
//output is 10273 is not expected should be 283 this is Bug
//////////////////////////
//solve by depugger breakpoint and browser

/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..." 
Your tasks: 
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets. 
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems! 
Test data: 
§ Data 1: [17, 21, 23] 
§ Data 2: [12, 5, -5, 0, 4]
--------------------------------------------------------------------------
1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with ºC
- Strings needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/
// const data_1 = [17, 21, 23];
// const data_2 = [12, 5, -5, 0, 4];
// console.log(`... ${data_1[0]}ºC in 1
// days ... ${data_1[1]}ºC in 2 days ... ${data_1[2]}ºC in 3 days ...`);
// const printForecast = function (arr) {
//   let string = '';
//   for (let i = 0; i < arr.length; i++) {
//     string += `${arr[i]}ºC in ${i + 1}...`;
//   }
//   console.log('...' + string);
// };
// printForecast(data_1);
// printForecast(data_2);
