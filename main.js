// 2048
// The goal of this game is to reach 2048 in first square of the board
// New Game button resets the game, score is 0, board has 2 random squares with the value of 2
// Moving the board with arrow keys
// How to add square fields that are equal and if they're not move them
// Every key press creates a new board square with the value of 2 or 4, but only if there's an empty(0) square othwerwise player loses the game
// Updating the score
// When player reaches the goal the notification appears

// Selecting HTML elements
const currentScore = document.getElementById("score");
const highScore = document.getElementById("high-score");
const result = document.getElementById("result");
const newGame = document.getElementById("new-game");
const grid = document.querySelector(".grid");

let score = 0;
let high = 0;
const goal = 2048;
const width = 4;

let random = () => Math.floor(Math.random() * 4);

// Create random number between 2 - 4
const randomNum = () => (Math.random() > 0.5 ? 2 : 4);

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

// console.table(board);
const generateRand = () => (board[random()][random()] = randomNum());

const generateGrid = () => {
  grid.innerHTML = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      grid.innerHTML += `<div class="grid__square">${board[i][j]}</div>`;
    }
  }
};
const setInitialSquares = () => {
  generateRand();
  generateRand();
};

// move right functionality
const moveRight = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j + 1] == 0) {
        board[i][j + 1] = board[i][j];
        board[i][j] = 0;
        // console.log(board[i][j + 1]);
      }
    }
  }
  generateGrid();
};
setInitialSquares();
moveRight();

// move left
const moveLeft = () => {
  console.log(board);
  for (let i = board.length - 1; i >= 0; i--) {
    // console.log(board[i]);
    for (let j = board[i].length - 1; j > 0; j--) {
      if (board[i][j - 1] == 0) {
        console.log(board[i][j]);
        board[i][j - 1] = board[i][j];
        board[i][j] = 0;
      }
    }
  }
  generateGrid();
};
setInitialSquares();
// moveLeft();

// MOVE UP
const moveUp = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 0) {
        board[i][j] = board[i][j];
        board[i][j] = 0;
      }
    }
  }
  generateGrid();
};
setInitialSquares();
moveUp();

// Resetting the game, score = 0, board is clean.
const setNewGame = () => {
  currentScore.innerText = 0;

  setInitialSquares();
};
// New Game functionality
newGame.addEventListener("click", setNewGame);

// MOVEMENT
// Detecting arrows keys presses
document.addEventListener("keydown", (event) => {
  let move = event.key;
  // Checking which key was pressed
  if (move === "ArrowUp") {
    // console.log("go up");
    moveUp();
  } else if (move === "ArrowDown") {
  } else if (move === "ArrowRight") {
    moveRight();
  } else if (move === "ArrowLeft") {
    moveLeft();
  }
});

// const arr = [0, 2, 0, 0];

// arr.forEach((x, i) => {
//   // console.log(arr[i]);
//   if (arr[i + 1] == 0) {
//     console.log(arr[i]);
//     arr[i + 1] = arr[i];
//     arr[i] = 0;
//   }
// });
