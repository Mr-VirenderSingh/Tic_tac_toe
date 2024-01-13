let btns = document.querySelectorAll(".btn");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // vertical
  [0, 4, 8],
  [2, 4, 6], // diagonal
];

let turn = 0;
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "") {
      if (turn === 0) {
        btn.innerHTML = "X";
        turn = 1;
        checkWinner();
      } else {
        btn.innerHTML = "O";
        turn = 0;
        checkWinner();
      }
    }
  })
);

function checkWinner() {
  for (let pattens of winConditions) {
    let val1 = btns[pattens[0]].innerText;
    let val2 = btns[pattens[1]].innerText;
    let val3 = btns[pattens[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 && val1 === val2 && val2 === val3) {
        btns.disabled = true;
      }
    }
  }
}
