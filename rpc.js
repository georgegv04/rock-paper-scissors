function getComputerChoice() {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  return userInput;
}
