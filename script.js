"use strict";

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

const showNumber = (secretNumber) =>
  (document.querySelector(".number").textContent = secretNumber);

const setScore = (score) =>
  (document.querySelector(".score").textContent = score);

const changeColor = (color) =>
  (document.querySelector("body").style.backgroundColor = color);

const changeWidth = (width) =>
  (document.querySelector(".number").style.width = width);

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("⛔ Please input a number between 1 and 20 ⛔");

    // When player wins the game
  } else if (guess === secretNumber) {
    displayMessage("🎊 YOU WIN 🎊");
    showNumber(secretNumber);
    changeColor("#60b347");
    changeWidth("30rem");

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 2) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score -= 2;
      setScore(score);
      // document.querySelector(".score").textContent = score;

      // When player loses the game
    } else {
      displayMessage("💥 GAME OVER 💥");
      setScore(0);
      // document.querySelector(".score").textContent = 0;
      showNumber(secretNumber);
      changeWidth("30rem");
      changeColor("#6B0504");
    }
  }
});

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecretNumber();
  showNumber("?");
  changeWidth("15rem");
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  setScore(score);
  // document.querySelector(".score").textContent = score;
  changeColor("#222");
});
