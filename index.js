const $boardList = document.querySelectorAll(".board-item");
const $score1 = document.querySelector(".score-1");
const $score2 = document.querySelector(".score-2");

let currentMove = "X";
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function toggleMove() {
  if (currentMove == "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
}

function verifyGame() {
  if (
    $bordItem0.innerHTML != "" &&
    $bordItem0.innerHTML == $bordItem1.innerHTML &&
    $bordItem1.innerHTML == $bordItem2.innerHTML
  ) {
    return currentMove;
  }
  if (
    $bordItem3.innerHTML != "" &&
    $bordItem3.innerHTML == $bordItem4.innerHTML &&
    $bordItem4.innerHTML == $bordItem5.innerHTML
  ) {
    return currentMove;
  }
  if (
    $bordItem6.innerHTML != "" &&
    $bordItem6.innerHTML == $bordItem7.innerHTML &&
    $bordItem7.innerHTML == $bordItem8.innerHTML
  ) {
    return currentMove;
  }
}

$bordItem0.addEventListener("click", function () {
  if ($bordItem0.innerHTML != "") {
    return;
  }
  $bordItem0.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$bordItem1.addEventListener("click", function () {
  if ($bordItem1.innerHTML != "") {
    return;
  }
  $boardItem1.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem2.addEventListener("click", function () {
  $bordItem2.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem3.addEventListener("click", function () {
  $bordItem3.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem4.addEventListener("click", function () {
  $bordItem4.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem5.addEventListener("click", function () {
  $bordItem5.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem6.addEventListener("click", function () {
  $bordItem6.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem7.addEventListener("click", function () {
  $bordItem7.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem8.addEventListener("click", function () {
  $bordItem8.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

function resetBattlefield() {
  for (const $boardItem of $boardList) {
    $boardItem.innerHTML = "";
  }
}

function move(moveIndex) {
  const $boardItem = $bordList(boardIndex)[boardIndex];

  if ($boardItem.innerHTML != "") {
    return;
  }
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
  if (winner == "X") {
    scorePlayer1++;
  }
  if (winner == "O") {
    scorePlayer2++;
  }
}

function printScore() {
  $score1.innerHTML = scorePlayer1;
  $score2.innerHTML = scorePlayer2;
}

function addBoardListeners() {
  for (let index = 0; index < $boardList.length; index++) {
    const $boardItem = $boardList[index];

    $bordItem0.addEventListener("click", function () {
      moveBy(index);
    });
  }
}

addBoardListeners();
