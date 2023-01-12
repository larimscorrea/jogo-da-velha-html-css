const $bordItem0 = document.querySelector('.bord-item0');
const $bordItem1 = document.querySelector('.bord-item1');
const $bordItem2 = document.querySelector('.bord-item2');
const $bordItem3 = document.querySelector('.bord-item3');
const $bordItem4 = document.querySelector('.bord-item4');
const $bordItem5 = document.querySelector('.bord-item5');
const $bordItem6 = document.querySelector('.bord-item6');
const $bordItem7 = document.querySelector('.bord-item7');
const $bordItem8 = document.querySelector('.bord-item8');

let currentMove = 'X';

function toggleMove() {
  if (currentMove == 'X') {
    currentMove = 'O';
  } else {
    currentMove = 'X';
  }
}

function verifyGame() {
  if (
    ($bordItem0.innerHTML =
      '' &&
      $bordItem0.innerHTML == $bordItem1.innerHTML &&
      $bordItem1.innerHTML == $bordItem2.innerHTML)
  ) {
    alert('Linha 0');
  }
  if (
    ($bordItem3.innerHTML =
      '' &&
      $bordItem3.innerHTML == $bordItem4.innerHTML &&
      $bordItem4.innerHTML == $bordItem5.innerHTML)
  ) {
    alert('Linha 1');
  }
  if (
    ($bordItem6.innerHTML =
      '' &&
      $bordItem6.innerHTML == $bordItem7.innerHTML &&
      $bordItem7.innerHTML == $bordItem8.innerHTML)
  ) {
    alert('Linha 0');
  }
}

$bordItem0.addEventListener('click', function () {
  if ($bordItem0.innerHTML != '') {
    return;
  }
  verifyGame();
  toggleMove();
});

$bordItem1.addEventListener('click', function () {
  $bordItem1.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem2.addEventListener('click', function () {
  $bordItem2.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem3.addEventListener('click', function () {
  $bordItem3.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem4.addEventListener('click', function () {
  $bordItem4.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem5.addEventListener('click', function () {
  $bordItem5.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem6.addEventListener('click', function () {
  $bordItem6.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem7.addEventListener('click', function () {
  $bordItem7.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});

$bordItem8.addEventListener('click', function () {
  $bordItem8.innerHTML = currentMove;
  verifyGame();
  toggleMove();
});
