//Exporting Module
console.log('Exporting Module');
// console.log('Start fetching');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching');
const shippingCost = 10;
export const cart = [];
//Two type of exports name export and default export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
const totalCost = 237;
const totalQuantity = 20;
export { totalCost, totalQuantity as tq };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
