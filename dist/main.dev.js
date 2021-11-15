"use strict";

// Select HTML elements
var currentScore = document.getElementById("score");
var highScore = document.getElementById("high-score");
var result = document.getElementById("result");
var newGame = document.getElementById("new-game");
var grid = document.querySelector(".grid");
var squares = document.querySelectorAll(".grid__square"); // Goal of the game: Reach 2048 by adding 2s and multiplies of 2
// Game starts with 2 randomly assigned squares with the value of 2

var randomInitialSquares = function randomInitialSquares() {
  var first = Math.floor(Math.random() * squares.length);
  var second = Math.floor(Math.random() * squares.length);
  console.log(first, second);
}; // add the click event to NEW GAME


var resetGame = function resetGame() {
  // reset current score
  currentScore.innerText = 0;
  randomInitialSquares();
};

newGame.addEventListener("click", resetGame); // Moving and adding up squares that are equal - displaying updated score
// Once added new basic number is being created and randomly assigned
// New Game button resets the game, score is 0, board has 2 random squares