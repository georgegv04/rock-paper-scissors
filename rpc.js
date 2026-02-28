let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector(".runningResult");

const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
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

  if (humanChoice === computerChoice) {
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
  updateScoreDisplay();
  checkWinner();
}

function disableButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

const game = document.querySelector("#game");

game.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      playRound("rock");
      break;

    case "paper":
      playRound("paper");
      break;

    case "scissors":
      playRound("scissors");
      break;
  }
});
