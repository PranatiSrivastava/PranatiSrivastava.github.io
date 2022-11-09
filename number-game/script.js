'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when no number input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  //when guess is same as secret number
  else if (guess === secretnumber) {
    //document.querySelector('.message').textContent = '🤩🥳Yipiee You Won!🥂';
    displayMessage('🤩🥳Yipiee You Won!🥂');

    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess number is greater
  else if (guess > secretnumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //'🙁The number is too high!';
      displayMessage('🙁The number is too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess number is smaller
  else if (guess < secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //'🙁The number is too low!';
      displayMessage('🙁The number is too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
