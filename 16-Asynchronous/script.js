'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src=${data.flags.svg} />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
//////////////////////////////////////
//old school way
// const getCountryData = function (country, lan, currency) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();
//   console.log(request.responseText);
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     const html = `<article class="country">
//           <img class="country__img" src=${data.flags.svg} />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[lan]}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[currency].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal', 'por', 'EUR');
// getCountryData('usa', 'eng', 'USD');
//callback hell
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//   <img class="country__img" src=${data.flags.svg} />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryAndNeighbour = function (country) {
//   //Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render country 1
//     renderCountry(data);
//     //Get neighbour country(2)
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;
//     console.log(neighbour);
//     //Ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       const neighbourData = JSON.parse(this.responseText);
//       console.log(neighbourData);
//       renderCountry(neighbourData, 'neighbour');
//     });
//   });
// };
// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
/////////////////////////////////////////////////////////////////
//Promise
// const getCountryData = function (country, lan, currency) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();
// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );
// console.log(request); //return promise
// const getCountryData = function (country) {
//   const request = fetch(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
//chain of promise
// const getCountryData = function (country) {
//   const request = fetch(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   )
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'fdsnnsns';
//       if (!neighbour) return;
//       //country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}🎇🎇`);
//       renderError(`Some thing went wrong ${err.message} 🎇🎇 Try again`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       //country 2
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}🎇🎇`);
//       renderError(`Some thing went wrong ${err.message} 🎇🎇 Try again`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// getCountryData('australia');
////////////////////////////////////////////////////////////////////
/*
Asynchronous JavaScript 
Coding Challenge #1 
In this challenge you will build a function 'whereAmI' which renders a country 
only based on GPS coordinates. For that, you will use a second API to geocode 
coordinates. So in this challenge, you’ll use an API on your own for the first time 
Your tasks: 
PART 1 
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') 
and a longitude value ('lng') (these are GPS coordinates, examples are in test 
data below). 
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means 
to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and 
promises to get the data. Do not use the 'getJSON' function we created, that 
is cheating 
3. Once you have the data, take a look at it in the console to see all the attributes 
that you received about the provided location. Then, using this data, log a 
message like this to the console: “You are in Berlin, Germany” 
4. Chain a .catch method to the end of the promise chain and log errors to the 
console 
5. This API allows you to make only 3 requests per second. If you reload fast, you 
will get this error with code 403. This is an error with the request. Remember, 
fetch() does not reject the promise in this case. So create an error to reject 
the promise yourself, with a meaningful error message 
PART 2 
6. Now it's time to use the received data to render a country. So take the relevant 
attribute from the geocoding API result, and plug it into the countries API that 
we have been using. 
7. Render the country and catch any errors, just like we have done in the last 
lecture (you can even copy this code, no need to type the same code) 
30 
The Complete JavaScript Course 
Test data: 
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude) 
§ Coordinates 2: 19.037, 72.873 
§ Coordinates 3: -33.933, 18.474 
GOOD LUCK 
*/
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`problem with gecoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.country}`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}🎇🎇`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
///////////////////////////////////////////////////////////////
// console.log('Test start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolve promise 1').then(res => console.log(res));
// Promise.resolve('Resolve promise 2').then(res => {
//   for (let i; i < 1000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');
//////////////////////////////////////////////////////////////
//Build promise
// const lottaryPromise = new Promise(function (resolve, reject) {
//   //resolve==>fullfield
//   //rejected error
//   console.log('Lotter draw is happen');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 😎');
//     } else {
//       reject(new Error('You are lost money 😢🤦‍♀️'));
//     }
//   }, 2000);
// });
// lottaryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //promisfing setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     'I wate for a 1 second';
//     return wait(1);
//   })
//   .then(() => {
//     'I wate for a 2 second';
//     return wait(1);
//   })
//   .then(() => {
//     'I wate for a 3 second';
//     return wait(1);
//   })
//   .then(() => {
//     'I wate for a 4 second';
//     return wait(1);
//   });
//callback hell
// setTimeout(() => {
//   console.log('I wate for a second');
//   setTimeout(() => {
//     console.log('I wate for a second');
//     setTimeout(() => {
//       console.log('I wate for a second');
//       setTimeout(() => {
//         console.log('I wate for a second');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//immediately fired
// Promise.resolve('abs').then(res => console.log(res));
// Promise.reject(new Error('Error')).catch(err => console.error(err));
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// console.log('Getting position');
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(res => console.log(res));
// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then(res => {
//       const { latitude: lat, longitude: lng } = res.coords;
//       console.log(res);
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`problem with gecoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.country}`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}🎇🎇`));
// };
// btn.addEventListener('click', whereAmI);
/*
Coding Challenge #2 
For this challenge you will actually have to watch the video! Then, build the image 
loading functionality that I just showed you on the screen. 
Your tasks: 
Tasks are not super-descriptive this time, so that you can figure out some stuff by 
yourself. Pretend you're working on your own 
PART 1 
1. Create a function 'createImage' which receives 'imgPath' as an input. 
This function returns a promise which creates a new image (use 
document.createElement('img')) and sets the .src attribute to the 
provided image path 
2. When the image is done loading, append it to the DOM element with the 
'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image (listen for 
the'error' event), reject the promise 
3. If this part is too tricky for you, just watch the first part of the solution 
PART 2 
4. Consume the promise using .then and also add an error handler 
5. After the image has loaded, pause execution for 2 seconds using the 'wait' 
function we created earlier 
6. After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that) 
7. After the second image has loaded, pause execution for 2 seconds again 
8. After the 2 seconds have passed, hide the current image 
Test data: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to “Fast 3G” in the dev tools Network tab, 
otherwise images load too fast 
GOOD LUCK 
*/
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', function () {
//       imgContainer.append(image);
//       resolve(image);
//     });
//     image.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
/////////////////////////////////////////////////////////////////////
///async await
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   //fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(res=>res.json)
//   const position = await getPosition();
//   const { latitude: lat, longitude: lng } = position.coords;
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);
//   const res = await fetch(
//     `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
//   );
//   const data = await res.json();
//   renderCountry(data[0]);
// };
// whereAmI();
// console.log('First');
//////////////////////////////////////////////////////////
//try catch
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new error('problem getting country');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     const res = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
//     );
//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err.message}`);
//     renderError('Some thing went wrong ${err}');
//   }
// };
// whereAmI();
//////////////////////////////////////////////////////////////
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new error('problem getting country');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     const res = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
//     );
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city},${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err.message}`);
//     renderError('Some thing went wrong ${err}');
//     //Reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1: First get location');
//return promise
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => `2: ${err.message}`)
//   .finally(() => '3: Finish getting location');
// console.log('3: Finish getting location');
// (async function () {
//   try {
//     const res = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.log(console.log(`2: ${err.message}`));
//   }
//   console.log('3: Finish getting location');
// })();
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
    return response.json();
  });
};
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c3}`
//     // );
//     // console.log([data1.capital, data2.capital, data2.capital]);
//     const data = await Promise.all([
// getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
// getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
// getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('portugal', 'canada', 'tanzania');
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took to long!'));
//     }, sec * 1000);
//   });
// };
// Promise.race([
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/tanzania`,
//     timeout(2)
//   ),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
//promise srttledall
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
//promise.any
//only fulfield
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #3 
Your tasks: 
PART 1 
1. Write an async function 'loadNPause' that recreates Challenge #2, this time 
using async/await (only the part where the promise is consumed, reuse the 
'createImage' function from before) 
2. Compare the two versions, think about the big differences, and see which one 
you like more 
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G” 
in the dev tools Network tab 
PART 2 
1. Create an async function 'loadAll' that receives an array of image paths 
'imgArr' 
2. Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs') 
3. Check out the 'imgs' array in the console! Is it like you expected? 
4. Use a promise combinator function to actually get the images from the array 
5. Add the 'parallel' class to all the images (it has some CSS styles) 
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img
3.jpg']. To test, turn off the 'loadNPause' function 
GOOD LUCK 
*/
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
//part 1
const loadNPause = async function () {
  let img = await createImage('img/img-1.jpg');
  console.log('imge 1 loaded');
  await wait(2);
  img.style.display = 'none';
  await wait(2);
  await createImage('img/img-2.jpg');
  console.log('imge 2 loaded');
  await wait(2);
  img.style.display = 'none';
};
loadNPause();
//part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    imgElement = Promise.all(imgs);
    console.log(imgElement);
    imgs.array.forEach(img => {
      img.classList.add('parallel');
    });
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']);
