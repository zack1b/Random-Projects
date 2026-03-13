const slotButtons = document.querySelectorAll(".slot");

let board = [
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
];
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //row
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //column
  [0, 4, 8],
  [2, 4, 6], //Diagonals
];
let gameStatus = true;
let correntPlayer = "x";
const icons = {
  x: '<i class="fa-solid fa-x"></i>',
  o: '<i class="fa-solid fa-o"></i>',
};

document.getElementById("new-btn").addEventListener("click", () => {
  resetBoard();
});

slotButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    checkBoard(index);
  });
});

function checkBoard(i) {
  if (!gameStatus || board[i] !== "null") {
    return;
  }

  if (board[i] === "null") {
    // sets the index of the board to the corrent player
    board[i] = correntPlayer;
    slotButtons[i].innerHTML = icons[correntPlayer];

    const result = checkWinner();
    if (result) {
      gameStatus = false;
      if (result === "Draw") {
        console.log("It's a Draw");
      } else {
        console.log(`${result} has won the game`);
      }
    } else {
      // checks if the correntPlayer is the same(===) as "x" and if yes(?) set it to "o" and if not(:) use "x"
      correntPlayer = correntPlayer === "x" ? "o" : "x";
    }
  }
}

function resetBoard() {
  correntPlayer = "x";
  board = [
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
  ];
  slotButtons.forEach((button) => {
    button.textContent = "";
  });
  gameStatus = true;
}

function checkWinner() {
  for (let condition of winConditions) {
    let [a, b, c] = condition;

    if (board[a] !== "null" && board[a] === board[b] && board[a] === board[c]) {
      // console.log(condition);
      return board[a];
    }
  }

  if (!board.includes("null")) {
    return "Draw";
  }
  return null;
}
