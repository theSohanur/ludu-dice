document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6) + 1;

  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "../img/dice-" + dice + ".png";

  document.querySelector(".showscore").innerHTML = "Yahh!!! It's   "+dice ;
});
