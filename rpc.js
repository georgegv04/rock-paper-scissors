let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector(".runningResult");

function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function getHumanChoice() {
  let userInput = prompt("Choice");
  return userInput;
}

function updateScoreDisplay() {
  scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5) {
    resultDiv.textContent = "You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Computer won the game";
    disableButtons();
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let userChoice = humanChoice.toLowerCase();

  if (userChoice === computerChoice) {
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
  updateScoreDisplay();
  checkWinner();
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});
