"use strict";

// 2048
// The goal of this game is to reach 2048 in first square of the board
// New Game button resets the game, score is 0, board has 2 random squares with the value of 2
// Moving the board with arrow keys
// How to add square fields that are equal and if they're not move them
// Every key press creates a new board square with the value of 2 or 4, but only if there's an empty(0) square othwerwise player loses the game
// Updating the score
// When player reaches the goal the notification appears
// Selecting HTML elements
var currentScore = document.getElementById("score");
var highScore = document.getElementById("high-score");
var result = document.getElementById("result");
var newGame = document.getElementById("new-game");
var grid = document.querySelector(".grid");
var score = 0;
var high = 0;
var goal = 2048;
var width = 4;

var random = function random() {
  return Math.floor(Math.random() * 4);
}; // Create random number between 2 - 4


var randomNum = function randomNum() {
  return Math.random() > 0.5 ? 2 : 4;
};

var board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]; // console.table(board);

var generateRand = function generateRand() {
  return board[random()][random()] = randomNum();
};

var generateGrid = function generateGrid() {
  grid.innerHTML = "";

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      grid.innerHTML += "<div class=\"grid__square\">".concat(board[i][j], "</div>");
    }
  }
};

var setInitialSquares = function setInitialSquares() {
  generateRand();
  generateRand();
}; // move right functionality


var moveRight = function moveRight() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j + 1] == 0) {
        board[i][j + 1] = board[i][j];
        board[i][j] = 0; // console.log(board[i][j + 1]);
      }
    }
  }

  generateGrid();
};

setInitialSquares();
moveRight(); // move left

var moveLeft = function moveLeft() {
  console.log(board);

  for (var i = board.length - 1; i >= 0; i--) {
    // console.log(board[i]);
    for (var j = board[i].length - 1; j > 0; j--) {
      if (board[i][j - 1] == 0) {
        console.log(board[i][j]);
        board[i][j - 1] = board[i][j];
        board[i][j] = 0;
      }
    }
  }

  generateGrid();
};

setInitialSquares(); // moveLeft();
// MOVE UP

var moveUp = function moveUp() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] == 0) {
        board[i][j] = board[i][j];
        board[i][j] = 0;
      }
    }
  }

  generateGrid();
};

setInitialSquares();
moveUp(); // Resetting the game, score = 0, board is clean.

var setNewGame = function setNewGame() {
  currentScore.innerText = 0;
  setInitialSquares();
}; // New Game functionality


newGame.addEventListener("click", setNewGame); // MOVEMENT
// Detecting arrows keys presses

document.addEventListener("keydown", function (event) {
  var move = event.key; // Checking which key was pressed

  if (move === "ArrowUp") {
    // console.log("go up");
    moveUp();
  } else if (move === "ArrowDown") {} else if (move === "ArrowRight") {
    moveRight();
  } else if (move === "ArrowLeft") {
    moveLeft();
  }
}); // const arr = [0, 2, 0, 0];
// arr.forEach((x, i) => {
//   // console.log(arr[i]);
//   if (arr[i + 1] == 0) {
//     console.log(arr[i]);
//     arr[i + 1] = arr[i];
//     arr[i] = 0;
//   }
// });