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
      break;
  }
  return decision;
}

let computerChoice;
let compNumber = () => Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
  computerChoice = getChoice(compNumber());
  computerMessage = `Computer chose: ${computerChoice}`;
  log(computerMessage);
}

let humanChoice;
function getHumanChoice() {
  let promptedChoice = Number(
    window.prompt("Enter 1 for 'Rock', 2 for 'Paper' and 3 for 'Scissors'")
  );
  let humanChoice = getChoice(promptedChoice);
  let humanMessage = `Human chose: ${humanChoice}`;
  log(humanMessage);
}

// for (i=1; i<=2; i++) {
//   getComputerChoice();
//   getHumanChoice();
// }
