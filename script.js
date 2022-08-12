'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // kada nema broja unetog
  if (!guess) {
    displayMessage(`⛔ No number`);

    // kada je br pogodjen
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Bravo! Tacan broj!!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // kada je broj prevelik  ili premali
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `⬆ Broj je previsok!!` : `⬇ Broj je premali!!`
      );
    }
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    displayMessage(`YOU LOST GAME 🤷‍♀️ `);
    document.querySelector(`.score`).textContent = 0;
    document.querySelector(`body`).style.backgroundColor = `#DC143C`;
    document.querySelector(`.number`).style.width = `30rem`;
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Pokreni igru.....`);
  document.querySelector(`.score`).textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `13rem`;
});
