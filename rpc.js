// function getComputerChoice() {
//   let choices = ["rock", "paper", "scissors"];
//   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
//   return computerChoice;
// }

// function getHumanChoice() {
//   let userInput = prompt("Rock, Paper, or Scissors?");
//   return userInput.toLowerCase();
// }

// function playGame(numberOfGames) {
//   let humanScore = 0;
//   let computerScore = 0;
//   let humanChoice;
//   let computerChoice;

//   for (let i = 0; i < numberOfGames; i++) {
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();

//     if (humanChoice === "rock")
//       switch (computerChoice) {
//         case "rock":
//           console.log("It's a tie");
//           break;
//         case "paper":
//           console.log("You lose! Paper beats Rock");
//           computerScore++;
//           break;
//         case "scissors":
//           console.log("You win! Rock beats Scissors");
//           humanScore++;
//           break;
//       }
//     else if (humanChoice === "paper") {
//       switch (computerChoice) {
//         case "rock":
//           console.log("You win! Paper beats Rock");
//           humanScore++;
//           break;
//         case "paper":
//           console.log("It's a tie");
//           break;
//         case "scissors":
//           console.log("You lose! Scissors beats Paper");
//           computerScore++;
//           break;
//       }
//     } else {
//       switch (computerChoice) {
//         case "rock":
//           console.log("You lose! Rock beats Scissors");
//           computerScore++;
//           break;
//         case "paper":
//           console.log("You win! Scissors beats Paper");
//           humanScore++;
//           break;
//         case "scissors":
//           console.log("It's a tie");
//           break;
//       }
//     }
//   }

//   console.log(`Human Score: ${humanScore}`);
//   console.log(`Computer Score: ${computerScore}`);

//   if (humanScore > computerScore) {
//     console.log("The final winner is the Human");
//   } else if (humanScore < computerScore) {
//     console.log("The final winner is the Computer");
//   } else {
//     console.log("The game is a tie");
//   }
// }

// playGame(5);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function getHumanChoice() {
  let userInput = prompt("Choice");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  let userChoice = humanChoice.toLowerCase();

  if (userChoice === computerChoice) {
    console.log("It's a tie");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${userChoice} beat's ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beat's ${userChoice}`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`You win, and the score was ${humanScore} to ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(
      `You lose, and the score was ${computerScore} to ${humanScore} `,
    );
  } else {
    console.log(
      `The game was a tie, and the game finished ${humanScore} - ${computerScore}`,
    );
  }
}

playGame();
