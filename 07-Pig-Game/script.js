'use strict';
//spagty
/*
//selecting element
//////////////////////////////////////////////////////////////////////
const scorePlayerZeroElement = document.querySelector('#score--0');
const scorePlayerOneElement = document.getElementById('score--1');
//select player
const playerZeroElement = document.querySelector('.player--0');
const playerOneElement = document.querySelector('.player--1');
//select current score
const currentPlayerZeroElement = document.getElementById('current--0');
const currentPlayerOneElement = document.getElementById('current--1');
//select diceElement
const diceElement = document.querySelector('.dice');
//select button
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
/////////////////////////////////////////////////////////////////////////
//starting conditions
//set score by 0
scorePlayerZeroElement.textContent = 0;
scorePlayerOneElement.textContent = 0;
diceElement.classList.add('hidden');
//////////////////////////////////////////////////////////////////////////
//states and variables
//state variable for current score
let currentscore = 0;
//hold 0 if player number 0 play and number 1 if player number 1 played
let activePlayer = 0;
//scores array scores[0] of player number 0 and scores[1] of player number 1 and
let scores = [0, 0];
let palying = true;
//////////0///////////////////////////////////////////////////////////////
//switch function بتغير اللاعب 
const switchPlayer = function () {
  //set score of player to 0 عن طريق الtempleate literal 
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //غير الboolean  لو 0 خليه 1 ولو 1 خليه 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  //reset current score
  currentscore = 0;
  //غير الactive toggle اللي مش active هيكون noactive والعكس صحيح
  playerZeroElement.classList.toggle('player--active');
  playerOneElement.classList.toggle('player--active');
};
///////////////////////////////////////////////////////////////////////////
// Button roll dice event handeler
btnRollDice.addEventListener('click', function () {
  //لو اللعب شغال اشتغل playing==true
  if (palying) {
    //1.Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    //////////////////////////////////////////////////
    //2.Display dice
    diceElement.classList.remove('hidden');
    //جديدة وهي تغير سورس الصورة بتجيب الالمنت وبعدها .src ='path'
   // هنا سهلنا علي نفسنا
   //عشان الصور بتتغير علي حسب الرقم بس فعملنها بال templeate literal
    diceElement.src = `dice-${dice}.png`;
    ////////////////////////////////////////////
    //3.check for 1
    //لو مش ب 1 هتزود الcurrentscore وتعرضها
    if (dice !== 1) {
      //if false add dice role to current score display the score
      currentscore += dice;
      //currentPlayerZeroElement.textContent = currentscore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    }
    //هتنادي علي فنكشن switchplayer
    else {
      //if true current will be 0 and switch player
      //if active palyer ===0 will be 0 and if not 0 sure it is 1 so will be 1
      //refactoring
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentscore = 0;
      // playerZeroElement.classList.toggle('player--active');
      // playerOneElement.classList.toggle('player--active');
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  //برضه ولو انا بلعب palying ==true
  if (palying) {
    //هزود الscore علي حسب لو اللاعب 0ولا 1
    // لو 0 الactive palyer ==0 والعكس صحيح لذلك هستخدم دي عشان اخزن الscore
    //score[activepalyer]
    //1.Add current score to active player
    scores[activePlayer] += currentscore;
    //بعدل الscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // بتأكد اعلي من 100 ولا لا لو اعلي هتخلي الفايز يظهر بصورة الفايز هتزودله كلاس الwiner وتشيل الactive 
    //2.check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //finish the game
    //switch to the next player
    else {
      //refactoring
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentscore = 0;
      // playerZeroElement.classList.toggle('player--active');
      // playerOneElement.classList.toggle('player--active');
      switchPlayer();
    }
  }
});
//هصفر كله واشيل الdice والاسكور وكله كله واعمل سيت للstate
btnNewGame.addEventListener('click', function () {
  scorePlayerZeroElement.textContent = 0;
  scorePlayerOneElement.textContent = 0;
  currentPlayerZeroElement.textContent = 0;
  currentPlayerOneElement.textContent = 0;
  playerOneElement.classList.remove('player--winner');
  playerZeroElement.classList.remove('player--winner');
  playerOneElement.classList.remove('player--active');
  playerZeroElement.classList.add('player--active');
  //states and variables
  //state variable for current score
  currentscore = 0;
  //hold 0 if player number 0 play and number 1 if player number 1 played
  activePlayer = 0;
  //scores array scores[0] of player number 0 and scores[1] of player number 1 and
  scores = [0, 0];
  palying = true;
});
*/
//refactoring
// Selecting elements
const scorePlayerZeroElement = document.querySelector('#score--0');
const scorePlayerOneElement = document.getElementById('score--1');
const playerZeroElement = document.querySelector('.player--0');
const playerOneElement = document.querySelector('.player--1');
const currentPlayerZeroElement = document.getElementById('current--0');
const currentPlayerOneElement = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//make function to initialize element to reuse it
// Starting conditions
let currentscore, activePlayer, scores, palying;

const init = function () {
  currentscore = 0;
  activePlayer = 0;
  scores = [0, 0];
  palying = true;

  scorePlayerZeroElement.textContent = 0;
  scorePlayerOneElement.textContent = 0;
  currentPlayerZeroElement.textContent = 0;
  currentPlayerOneElement.textContent = 0;

  diceElement.classList.add('hidden');
  playerOneElement.classList.remove('player--winner');
  playerZeroElement.classList.remove('player--winner');
  playerOneElement.classList.remove('player--active');
  playerZeroElement.classList.add('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  playerZeroElement.classList.toggle('player--active');
  playerOneElement.classList.toggle('player--active');
};

// Rolling dice functionality
btnRollDice.addEventListener('click', function () {
  if (palying) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentscore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (palying) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentscore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
btnNewGame.addEventListener('click', init);
