'use strict';

let displayMessage = message =>
  (document.querySelector('.message').textContent = message);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = Number(document.querySelector('.score').textContent);

let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No input Provided');
  } else if (guess === secretNumber) {
    displayMessage('You Won');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose,try again');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
