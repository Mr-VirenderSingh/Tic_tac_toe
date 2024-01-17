const game = (() => {
  let btns = document.querySelectorAll(".btn");
  let winnerpage = document.querySelector(".hide");
  let message = document.querySelector(".message");
  let newGamebtn = document.querySelector(".newGameBtn");
  let restartGame = document.querySelector("#resetBtn");

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
          btns.forEach((btn) => (btn.disabled = true));
          winnerpage.style.visibility = "visible";
          message.innerText = `"${val1}" Won The Game`;
          return;
        }
      }
      let filled = true;
      btns.forEach((btn) => {
        if (btn.innerHTML === "") {
          filled = false;
        }
      });
      if (filled) {
        message.innerText = "It's a Draw";
        winnerpage.style.visibility = "visible";
      }
    }
  }

  newGamebtn.addEventListener("click", newGame);
  restartGame.addEventListener("click", newGame);

  function newGame() {
    winnerpage.style.visibility = "hidden";
    btns.forEach((btn) => (btn.innerHTML = ""));
    btns.forEach((btn) => (btn.disabled = false));
  }
})();
