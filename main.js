const cells = document.querySelectorAll(".komorka");
const gameStatus = document.querySelector("#statusGry");
const restartButton = document.querySelector("#restart");

const toWin = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let start = false;

startGame();

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartButton.addEventListener("click", restartGame);
  gameStatus.textContent = `Kolej ${currentPlayer}`;
}

function cellClicked() {
  const cellIndex = this.getAttribute("numerKomorki");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  isWinner();
}

const changePlayer = () => {};

function updateCell(cell, index) {}

function isWinner() {}

function restartGame() {}
