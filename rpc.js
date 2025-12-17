function getComputerChoice() {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}
