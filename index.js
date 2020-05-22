var playerName1 = prompt("Enter the name of Player 1:");
var playerName2 = prompt("Enter the name of Player 2:");
var changeName = document.querySelectorAll("p");
var btn = document.querySelector("button");

changeName[0].textContent = playerName1;
changeName[1].textContent = playerName2;

btn.addEventListener("click", function () {
  var randomNumber1 = Math.random() * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;

  var randomNumber2 = Math.random() * 6;
  randomNumber2 = Math.floor(randomNumber2) + 1;

  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  var setStuff1 = document.querySelector(".img1");
  setStuff1.setAttribute("src", randomDiceImage1);

  var setStuff2 = document.querySelector(".img2");
  setStuff2.setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    var winnerTag = document.querySelector("h2");
    winnerTag.textContent = playerName1 + " 🥇, wins!🏆";
  } else if (randomNumber1 < randomNumber2) {
    var winnerTag = document.querySelector("h2");
    winnerTag.textContent = playerName2 + " 🥈, wins!🏆";
  } else {
    var winnerTag = document.querySelector("h2");
    winnerTag.textContent = "🤦‍♂️That's a tie. Try again!";
  }
});
