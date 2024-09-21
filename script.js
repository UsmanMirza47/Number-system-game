let computerGuess;
let userGuess = [];
let userNumberUpdate = document.getElementById("textOutput");
let userGuessNumber = document.getElementById("inputBox");
let userNumberText = document.getElementById("inputBox");

const init = () => {
  computerGuess = Math.round(Math.random() * 100);
  console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

function startGame() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}

function compareGuess() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //   compare computer and user number
  if (computerGuess > userNumber) {
    userNumberUpdate.innerHTML = "Your guess is too Low";
    userNumberText.value = "";
} else if (userNumber > computerGuess) {
    userNumberUpdate.innerHTML = "Your guess is too High";
    userNumberText.value = "";
} else {
    userNumberUpdate.innerHTML = "It's Correct 🎃";
    userNumberText.value = "";
  }

  document.getElementById("attempts").innerHTML = userGuess.length
}

function easyMode() {
  maxGuess = 10;
  startGame();
}

function hardMode() {
  maxGuess = 5;
  startGame();
}
