// A program to play rock, paper, scissors against the computer.

//This shorcut will make our lives easier when printing in
// the console
const log = console.log;

function getChoice(num) {
  let decision;
  switch (num) {
    case 1:
      decision = "Rock";
      break;
    case 2:
      decision = "Paper";
      break;
    case 3:
      decision = "Scissors";
      break;
    default:
      decision = "Value not allowed";
  }
  return decision;
}

let computerChoice;
let humanChoice;
let ties = 0;
let humanScore = 0;
let computerScore = 0;
let winnerMessage;
let compNumber = () => Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
  computerChoice = getChoice(compNumber());
  log(`Computer chose: ${computerChoice}`);
}

function getHumanChoice() {
  let promptedChoice = Number(
    window.prompt("Enter 1 for 'Rock', 2 for 'Paper' and 3 for 'Scissors'")
  );
  if (![1, 2, 3].includes(promptedChoice)) {
    throw new Error("Value not allowed. Game over.");
  }
  humanChoice = getChoice(promptedChoice);
  log(`You chose: ${humanChoice}`);
}

function compareResults(cc, hc) {
  if (cc == hc) {
    ties++;
    return (winnerMessage = "This round ends in a tie.");
  } else if (
    (cc == "Rock" && hc == "Scissors") ||
    (cc == "Paper" && hc == "Rock") ||
    (cc == "Scissors" && hc == "Paper")
  ) {
    computerScore++;
    return (winnerMessage = "You lost this round");
  } else {
    humanScore++;
    return (winnerMessage = "You win this round!");
  }
}

function completeGame() {
  try {
    log("Welcome to the Rock, Paper, Scissors simulator!");
    getComputerChoice();
    getHumanChoice();
    log(compareResults(computerChoice, humanChoice));
    log(`The score is: Human = ${humanScore} | Computer = ${computerScore}.`);
    log("");
  } catch (error) {
    log(error.message);
  }
}

for (i = 1; i <= 5; i++) {
  completeGame();
}
