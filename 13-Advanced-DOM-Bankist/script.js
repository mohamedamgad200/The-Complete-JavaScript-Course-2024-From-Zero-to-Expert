'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainers = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
///////////////////////////////////////
//Applicarion
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////////////////////////////
//Tabbed component
tabContainers.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //Guard clause
  if (!clicked) return;
  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  //Active tab
  clicked.classList.add('operations__tab--active');
  //Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//////////////////////////////////////////////////////////////////////
//Button smooth scrolling
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
//////////////////////////////////////////////////////////////////////
//nav smooth scrolling using delegation
//1. Add event listenerto common parent element
//2. Determine what element originated tothe event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////////
//Menu fade animation
const handelHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibling.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
//passing "arrgument" into handeler function
nav.addEventListener('mouseover', handelHover.bind(0.5));
nav.addEventListener('mouseout', handelHover.bind(1));
//////////////////////////////////////////////////////////////////////
////sticky navigation using intersection observer api
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
//Reveal section
const revealFunction = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObservier = new IntersectionObserver(revealFunction, {
  root: null,
  threshold: 0.15,
});
const allSections = document.querySelectorAll('section');
allSections.forEach(function (section) {
  sectionObservier.observe(section);
  section.classList.add('section--hidden');
});
//////////////////////////////////////////////////////////////////////
//lazy loading for imgs
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //Replace src with data src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve();
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));
//////////////////////////////////////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
//////////////////////////////////////////////////////////////////////
//sticky navigation
// const initialCoordinate = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCoordinate.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });
////sticky navigation using intersection observer api
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = { root: null, treshold: 0.1 };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
//////////////////////////////////////////////////////////////////////
//page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     const section = document.querySelector(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     console.log('link');
//   });
// });
//event delegation
// //1. Add event listenerto common parent element
// //2. Determine what element originated tothe event
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   //Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////
//Dom traversing
// const h1 = document.querySelector('h1');
//Going downwords:child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); //node list
// console.log(h1.children); //html collection
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
//Going upwords:parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
//Going sideways:sibling ==>only direct
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.previousSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//events
// const h1 = document.querySelector('h1');
// const alert1 = function () {
//   alert('addEventListener: Great!,you are reading the heading :D 1');
// };
// h1.addEventListener('mouseenter', alert1);
// setTimeout(() => h1.removeEventListener('mouseenter', alert1), 3000);
//old school
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great!,you are reading the heading :D 2');
// };
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   console.log(e.currentTarget === this); //true
//   //stop propegation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget);
//   },
//   true
// );

/////////////////////////////////////////////////////////////////////////////////////
// btnScrollTo.addEventListener('click', function (e) {
//   //coordination of scroll to section
//   // const s1coordinte = section1.getBoundingClientRect();
//   // console.log(s1coordinte);
//   // console.log(e.target.getBoundingClientRect());
//   // console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);
//   // console.log(
//   //   'height/width viewportpage',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );
//   // window.scrollTo(
//   //   s1coordinte.left + window.pageXOffset,
//   //   s1coordinte.top + window.pageYOffset
//   // );
//   //old way
//   // window.scrollTo({
//   //   left: s1coordinte.left + window.pageXOffset,
//   //   top: s1coordinte.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   //modernway
//   section1.scrollIntoView({ behavior: 'smooth' });
// });
////////////////////////////////////////////////////////////////////
//selecting
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections); //node list of elements

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button'); //return htmlcollections
// console.log(document.getElementsByClassName('btn')); //return htmlcollections
////////////////////////////////////////////////////////////////////////////////
//lecture
//Creating and inserting elements
//insertAdjacentHtml
//create element return a dom element
// const message = document.createElement('div');
// // message.textContent =
// //   'We use cookied for inproved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for inproved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// message.classList.add('cookie-message');
// // header.prepend(message);//child
// header.append(message); //child
// // header.append(message.cloneNode(true));
// // header.before(message); //sipling before
// // header.after(message); //sipling after
// //Delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });
// //Style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.height);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message)); //all style
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// //Attributes
// const logo = document.querySelector('.nav__logo');
// //standars
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src); //absolute url
// console.log(logo.getAttribute('src')); //relative url
// //not standars
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Banksit');
// console.log(logo.getAttribute('company'));

// const link = document.querySelector('.twitter-link');
// //same link
// console.log(link.href);
// console.log(link.getAttribute('href'));
// const link2 = document.querySelector('.nav__link--btn');
// console.log(link2.href); //absolute link
// console.log(link2.getAttribute('href')); //relative
// //Data attributes
// console.log(logo.dataset.versionNumber);
// //Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c', 'j');
// logo.classList.contains('c', 'j'); //not includes like arrays

//Don't make this because of it override classes
// logo.className = 'jonas';
//lifecycle of dom
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed  and dom tree build ', e);
// });
// window.addEventListener('load', function (e) {
//   console.log('page fully loaded', e);
// });
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = 'message';
// });
