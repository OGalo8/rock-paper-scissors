const log = console.log;

// ******** logic to obtain ComputerChoice ****************
function assignComputerAChoice(num) {
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

let compNumber = () => Math.floor(Math.random() * 3) + 1;
let computerChoice;

let getComputerChoice = () => {
  computerChoice = assignComputerAChoice(compNumber());
  log(`Computer chose: ${computerChoice}`);
};

// ******** logic to obtain humanChoice ****************
let ties = 0;
let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function getHumanChoice(callback) {
  // The control flow will wait until callback receives humanChoice
  let choiceButton = document.querySelector("#buttonMenu");
  choiceButton.addEventListener("click", (e) => {
    let target = e.target.closest("button");

    let humanChoice; // if we create humanChoice before user clicks, it will be undefined
    if (!target) return;

    switch (target.id) {
      case "rockButton":
        humanChoice = "rock";
        break;
      case "paperButton":
        humanChoice = "paper";
        break;
      case "scissorsButton":
        humanChoice = "scissors";
        break;
    }

    callback(humanChoice);
    getComputerChoice();
    compareResults(computerChoice, humanChoice);
    log(
      `The score is: Human = ${humanScore} | Computer = ${computerScore}. | Ties = ${ties}. `
    );
    log("");
    gamesPlayed++;
  });
}

function displayHumanChoice(choice) {
  if (choice) {
    log(`You chose: ${choice}`);
  }
}

// **** Logic to compare humanChoice and computerChoice

function compareResults(cc, hc) {
  let winnerMessage;
  if (cc == hc) {
    ties++;
    winnerMessage = "This round ends in a tie.";
  } else if (
    (cc == "rock" && hc == "scissors") ||
    (cc == "paper" && hc == "rock") ||
    (cc == "scissors" && hc == "paper")
  ) {
    computerScore++;
    winnerMessage = `You lose! ${cc} beats ${hc}.`;
  } else if (
    (hc == "rock" && cc == "scissors") ||
    (hc == "paper" && cc == "rock") ||
    (hc == "scissors" && cc == "paper")
  ) {
    humanScore++;
    winnerMessage = `You win! ${hc} beats ${cc}.`;
  }

  log(winnerMessage);
}

function decideWinner() {
  if (computerScore == humanScore) {
    log("The overall game ends in a tie.");
  } else if (humanScore > computerScore) {
    log("Congratulations! You won the overall game!");
  } else {
    log("Sorry, you lost the overall game.");
  }
}

// ******** Logic to play a single round
function playRound() {
  log("Welcome to the Rock, Paper, Scissors simulator!");
  getHumanChoice(displayHumanChoice);
}

playRound();
