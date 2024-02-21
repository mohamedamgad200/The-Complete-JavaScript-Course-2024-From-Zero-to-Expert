'use strict';
//store it in variable to make it easy to use
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//const btnOpenModal = document.querySelector('.show-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);
// for (let i = 0; i < btnOpenModal.length; i++)
//   console.log(btnOpenModal[i].textContent);
//closeModel not closeModel() we not call function we want this executed when the clicked is happen
// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener('click', function () {
//we want to show model this model in html is hidden because of hidden class if we didn't have hidden class the model is shown so we did it in javascript remove hidden class from the modal we can add and remove and check the class name
//variable name .classList .property==>add,remove,check   (class name in string without .)
// model.classList.remove('hidden');
// overlay.classList.remove('hidden');
//we can make this but this not easy
//model.style.dispaly='block'
//   });
// }
// btnCloseModal.addEventListener('click', function () {
//   model.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', function () {
//   model.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
//refactoring
const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//here using add event listener here on document we are basically listening for events everywhere so no matter where they happen on the page they all always trigger the event handeler
//press down any key it will work we should specify a key
//this function will happen for any keypress will happen
//we want only esc key to close the pop up menu
//how we know pressed when the event is happen???????
//any event like this javascript make for this object and this object contain all information about event itself and we can then access that object in theevent handeler function
// we need to do is add parameter to function and call e(event)
//when the event occure javascript well call the function with event object as an argument
//event object contain this key="انهي زرار"
document.addEventListener('keydown', function (e) {
  //refactoring
  // if (e.key === 'Escape') {
  //   if (!model.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModal();
  }
});
