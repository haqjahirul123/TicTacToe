import { Game } from "./game.js";
const core = new Game("x", "circle");


// Store data at LOCALSTORAGE
Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

Storage.prototype.copyContent = function () {
  const keyValuePairs = Object.entries(this);
  this.clear();
  return keyValuePairs;
};

Storage.prototype.restoreContent = function (content) {
  this.clear();
  for (let [key, value] of content) {
    this.setItem(key, value);
  }
};
if (localStorage.getItem("playerOneScore") !== null) {
  core.scoreOne = localStorage.getObject("playerOneScore");
}
if (localStorage.getItem("playerTwoScore") !== null) {
  core.scoreTwo = localStorage.getObject("playerTwoScore");
}

//Button Elements
const newGame_btn = document.getElementById("newGame_btn");
const restart_btn = document.getElementById("restart_btn");
const bot_btn = document.getElementById("bot_btn");

//Elements
const cellElements = document.querySelectorAll("[data-index]");
const board = document.getElementById("board");
const dataWinningMessage = document.querySelector("[data-winning-message]");
const winningMessageElement = document.getElementById("winning_message");
const playerOneScore = document.querySelector(".playerOneScore");
const playerTwoScore = document.querySelector(".playerTwoScore");
const playerMessage = document.querySelector(".player_Message");

//Button event listeners
newGame_btn.addEventListener("click", startGame);
restart_btn.addEventListener("click", restartGame);

startGame();
//Initializing the game and also clears the board from previous game data.
function startGame() {
  if (core.scoreOne < 1 || core.scoreTwo < 1) {
    core.playerTurn = Math.random() >= 0.5;
  }
  core.getNextPlayer(core.playerTurn);
  playerOneScore.textContent = core.scoreOne;
  playerTwoScore.textContent = core.scoreTwo;
  startMessage(core.playerTurn);

  cellElements.forEach((cell) => {
    cell.classList.remove(core.playerOne);
    cell.classList.remove(core.playerTwo);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  boardHoverClass();
  winningMessageElement.classList.remove("show");
}


function handleClick(event) {
  const cell = event.target;

  placeMark(cell, core.currentPlayer);

  if (core.checkWin(getPlayerCellElement())) {
    updateScoreElement(core.currentPlayer);
    endGame(false);
  } else if (core.isDraw(getPlayerCellElement())) {
    endGame(true);
  } else {
    core.getNextPlayer();
    updateMessage(core.currentPlayer);
    boardHoverClass();
  }
}

// Updates game score element.
function updateScoreElement(currentPlayer) {
  if (currentPlayer == core.playerOne) {
    playerOneScore.textContent = core.updateScore(currentPlayer);
  } else {
    playerTwoScore.textContent = core.updateScore(currentPlayer);
  }
}

//Initializing which player got the first starts.
function startMessage(playerTurn) {
  if (playerTurn === true) {
    playerMessage.textContent = "X Start";
  } else {
    playerMessage.textContent = "O Start";
  }
}

// Uppdates 'startMessage()' to show whos turn it is next
function updateMessage(currentPlayer) {
  if (currentPlayer == core.playerOne) {
    playerMessage.textContent = "X's Turn";
  } else {
    playerMessage.textContent = "O's Turn";
  }
}

// Adds class to cell in order to put down an X or circle.
function placeMark(cell, currentPlayer) {
  cell.classList.add(currentPlayer);
}

// Adds hover effect to cell to show current mark/player.
function boardHoverClass() {
  board.classList.remove(core.playerOne);
  board.classList.remove(core.playerTwo);
  if (core.playerTurn) {
    board.classList.add(core.playerOne);
  } else {
    board.classList.add(core.playerTwo);
  }
}

// Gets player html class from cellelemtens and adds to list.
function getPlayerCellElement() {
  let playerCells = [];
  for (let playerclass of cellElements) {
    if (playerclass.classList.length > 1) {
      playerCells.push(playerclass.classList[1]);
    } else {
      playerCells.push(null);
    }
  }
  return playerCells;
}

// Outputs winning message based on a bool from check win and isdraw result.
function endGame(draw) {
  if (draw) {
    dataWinningMessage.textContent = "Draw!";
  } else {
    dataWinningMessage.textContent = `${core.playerTurn ? "X's" : "O's"} Win!`;
  }
  winningMessageElement.classList.add("show");
}

// Reloads current html document.
function restartGame() {
  localStorage.clear();
  return location.reload(true);
}

// Main BOT function, checks for empty cell and places mark at random.
// function botPlayer(currentPlayer) {
//   let cells = Array.from(cellElements);
//   let fullCells = [];
//   let emptyCells = [];

//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i].className == "cell x" || cells[i].className == "cell circle") {
//       fullCells.push(i);
//     } else {
//       emptyCells.push(i);
//     }
//   }

//   let botTurn = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//   placeMark(cells[botTurn], currentPlayer);
// }
