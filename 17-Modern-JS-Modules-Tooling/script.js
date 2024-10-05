//Importing Module
// import { addToCart, totalCost as cost, tq } from './shoppingCart.js';
console.log('Importing Module');
// console.log(shippingCost); //error this in other module
// addToCart('bread', 5);
// console.log(cost, tq);
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalCost);
// import add, { addToCart, totalCost as cost, tq } from './shoppingCart.js';
// console.log(cost, tq);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('fish', 2);
console.log(cart);
//block
// console.log('Start fetshing');
// const req = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await req.json();
// console.log(data);
// console.log('Something');
// const getLastPost = async function () {
//   const req = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await req.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastpost = getLastPost();
// console.log(lastpost);
//Not very clear
// lastpost.then(last => console.log(last));
// const lastPost2 = await lastpost;
// console.log(lastPost2);
// const ShoppingCart2 = (function () {
//   const shippingCost = 10;
//   const cart = [];
//   const totalCost = 237;
//   const totalQuantity = 20;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart and shipping coast ${shippingCost}`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} order from supplier`);
//   };
//   return {
//     cart,
//     addToCart,
//     totalQuantity,
//     totalCost,
//   };
// })();
// ShoppingCart2.addToCart('pizza', 2);
// ShoppingCart2.addToCart('bread', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.cart);
// console.log(ShoppingCart2.shippingCost); //undefined
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const person = new Person('mohamed');
