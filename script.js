const btns = document.querySelectorAll(".btn");

let playerTurn = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (turn) => {
    if(playerTurn === 0){
      btn.innerHTML = "X";
      playerTurn = 1;
    }else{
      btn.innerHTML = "O";
      playerTurn = 0;
    }
  });
});
