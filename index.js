const $boardList = document.querySelectorAll(".board-item");
const $score1 = document.querySelector(".score-1");
const $score2 = document.querySelector(".score-2");

let currentMove = "X";
let scorePlayer1 = 0;
let scorePlayer2 = 0;

const winConditionS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function toggleMove() {
  currentMove = currentMove == "X" ? "O" : "X";
}

function verifyGame() {
  let filledFields = 0;

  for (const condition of winConditions) {
    const filterIndex0 = condition[0];
    const filterIndex1 = condition[1];
    const filterIndex2 = condition[2];

    const $field1 = $boardList[fieldIndex0];
    const $field2 = $boardList[fieldIndex2];
    const $field3 = $boardList[fieldIndex3];

    if ($field1.innerHTML != "" && $field1.innerHTML == $field2.innerHTML && $field2.innerHTML == $field3.innerHTML) {
      return currentMove;
    }
  }

  for (const $field of $boardList) {
    if ($field.innerHTML != "") filledFields++;
  }

  if (filledFields == 9) return 'draw'

function resetBattlefield() {
  for (const $boardItem of $boardList) {
    $boardItem.innerHTML = "";
  }
}

function move(moveIndex) {
  const $boardItem = $boardList(boardIndex)[boardIndex];

  if ($boardItem.innerHTML != "") return;

  $boardItem.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || game == "O") {
    // alert(currentMove);
    // resetBattlefield();
    addPoint(gameResult);
    printScore();
    setTimeout(resetBattlefield, 1000);
  }
  if (gameResult == "draw") {
    // alert("Empate");
    // resetBattlefield();
    setTimeout(resetBattlefield, 1000);
  }
}

function addPoint(winner) {
  if (winner == "X") scorePlayer1++;
  if (winner == "O") scorePlayer2++;
}

function printScore() {
  $score1.innerHTML = scorePlayer1 < 10 ? "0" + scorePlayer1 : scorePlayer1;
  $score2.innerHTML = scorePlayer2 < 10 ? "0" + scorePlayer2 : scorePlayer2;
  // $score1.innerHTML = String(scorePlayer1).padStart(2, "0"); -> forma de substituir o if e o else e a forma acima
  // $score2.innerHTML = String(scorePlayer2).padStart(2, "0")
}

function addBoardListeners() {
  for (let index = 0; index < $boardList.length; index++) {
    const $boardItem = $boardList[index];

    $boardItem0.addEventListener("click", function () {
      move(index);
    });
  }
}

addBoardListeners();
