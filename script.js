"use strict";

// Arrow functions
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

const inputValue = (input) => (document.querySelector(".guess").value = input);

// Initial conditions
let secretNumber = generateSecretNumber(); // Generates a random number and stores it in a variable
let score = 20; // Sets score to 20
let highscore = 0; // Sets highscore to 0

// Check button functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("⛔ Please input a number between 1 and 20 ⛔");

    // When player wins the game
  } else if (guess === secretNumber) {
    displayMessage("🎊 YOU WIN 🎊");
    showNumber(secretNumber);
    changeColor("#60b347");
    changeWidth("30rem");

    // Records highscore
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

      // When player loses the game
    } else {
      displayMessage("💥 GAME OVER 💥");
      setScore(0);
      showNumber(secretNumber);
      changeWidth("30rem");
      changeColor("#6B0504");
    }
  }
});

// Reset the game with again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecretNumber();
  showNumber("?");
  changeWidth("15rem");
  inputValue("");
  displayMessage("Start guessing...");
  setScore(score);
  changeColor("#222");
});
