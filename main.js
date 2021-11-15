// Select HTML elements
const currentScore = document.getElementById("score");
const highScore = document.getElementById("high-score");
const result = document.getElementById("result");
const newGame = document.getElementById("new-game");

const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".grid__square");

// Goal of the game: Reach 2048 by adding 2s and multiplies of 2

// Game starts with 2 randomly assigned squares with the value of 2

const randomInitialSquares = () => {
  let first = Math.floor(Math.random() * squares.length);
  let second = Math.floor(Math.random() * squares.length);
  console.log(first, second);
};
// add the click event to NEW GAME

const resetGame = () => {
  // reset current score
  currentScore.innerText = 0;
  randomInitialSquares();
};
newGame.addEventListener("click", resetGame);

// Moving and adding up squares that are equal - displaying updated score
// Once added new basic number is being created and randomly assigned
// New Game button resets the game, score is 0, board has 2 random squares
