// A program to play rock, paper, scissors against the computer.

//This shorcut will make our lives easier when printing in
// the console
const log = console.log;

function getChoice(num) {
  let decision;
  switch (num) {
    case 1:
      decision = "rock";
      break;
    case 2:
      decision = "paper";
      break;
    case 3:
      decision = "scissors";
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
  humanChoice = prompt("Write 'rock', 'paper' or 'scissors' ").toLowerCase();
  if (!["rock", "paper", "scissors"].includes(humanChoice)) {
    throw new Error("The value you entered is not allowed. Game over.");
  }
  log(`You chose: ${humanChoice}`);
}

function compareResults(cc, hc) {
  if (cc == hc) {
    ties++;
    return (winnerMessage = "This round ends in a tie.");
  } else if (
    (cc == "rock" && hc == "scissors") ||
    (cc == "paper" && hc == "rock") ||
    (cc == "scissors" && hc == "paper")
  ) {
    computerScore++;
    return (winnerMessage = `You lose! ${cc} beats ${hc}.`);
  } else {
    humanScore++;
    return (winnerMessage = `You win! ${hc} beats ${cc}.`);
  }
}

function playRound() {
  try {
    log("Welcome to the Rock, Paper, Scissors simulator!");
    getComputerChoice();
    getHumanChoice();
    log(compareResults(computerChoice, humanChoice));
    log(
      `The score is: Human = ${humanScore} | Computer = ${computerScore}. | Ties = ${ties}. `
    );
    log("");
  } catch (error) {
    log(error.message);
  }
}

function playGame() {
  for (i = 1; i <= 5; i++) {
    playRound();
  }

  if (computerScore == humanScore) {
    log("The overall game ends in a tie.");
  } else if (humanScore > computerScore) {
    log("Congratulations! You won the overall game!");
  } else {
    log("Sorry, you lost the overall game.");
  }
}

playGame(computerScore, humanScore);
