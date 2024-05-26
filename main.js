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
  start = true;
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartButton.addEventListener("click", restartGame);
  gameStatus.textContent = `Kolej ${currentPlayer}`;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !start) {
    return;
  }

  updateCell(this, cellIndex);
  if (start) {
    setTimeout(botMove, 500);
  }
  changePlayer();
  isWinner();
}

const changePlayer = () => {
  if (currentPlayer == "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
  gameStatus.textContent = `Kolej ${currentPlayer}`;
};

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function isWinner() {
  let gameWon = false;

  for (let i = 0; i < toWin.length; i++) {
    const condition = toWin[i];
    const cellOne = options[condition[0]];
    const cellTwo = options[condition[1]];
    const cellThree = options[condition[2]];

    if (cellOne == "" || cellTwo == "" || cellThree == "") {
      continue;
    }

    if (cellOne == cellTwo && cellThree == cellTwo) {
      gameWon = true;
      break;
    }
  }
  if (gameWon == true) {
    changePlayer();
    gameStatus.textContent = `Wygrał ${currentPlayer}`;
    start = false;
  } else if (!options.includes("")) {
    gameStatus.textContent = "Remis";
    start = false;
  } else {
    changePlayer;
  }
}

function restartGame() {
  currentPlayer = "O";
  options = ["", "", "", "", "", "", "", "", ""];
  gameStatus.textContent = `Kolej ${currentPlayer}`;
  cells.forEach((cell) => (cell.textContent = ""));
  start = true;
}

function botMove() {
  let emptyCells = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i] === "") {
      emptyCells.push(i);
    }
  }
  if (emptyCells.length === 0 || !start) {
    return;
  }
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const cellIndex = emptyCells[randomIndex];
  const cell = cells[cellIndex];
  updateCell(cell, cellIndex);
  changePlayer();
  isWinner();
}
