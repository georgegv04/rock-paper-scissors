function getComputerChoice() {
  let things = ["rock", "paper", "scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  return userInput.toLowerCase();
}

function playGame(numberOfGames) {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice;
  let computerChoice;

  for (let i = 0; i < numberOfGames; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "rock")
      switch (computerChoice) {
        case "rock":
          console.log("It's a tie");
          break;
        case "paper":
          console.log("You lose! Paper beats Rock");
          computerScore++;
          break;
        case "scissors":
          console.log("You win! Rock beats Scissors");
          humanScore++;
          break;
      }
    else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats Rock");
          humanScore++;
          break;
        case "paper":
          console.log("It's a tie");
          break;
        case "scissors":
          console.log("You lose! Scissors beats Paper");
          computerScore++;
          break;
      }
    } else {
      switch (computerChoice) {
        case "rock":
          console.log("You lose! Rock beats Scissors");
          computerScore++;
          break;
        case "paper":
          console.log("You win! Scissors beats Paper");
          humanScore++;
          break;
        case "scissors":
          console.log("It's a tie");
          break;
      }
    }
  }

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

playGame(5);
