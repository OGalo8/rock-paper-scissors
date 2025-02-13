//A script to play a simple rock,paper,scissors game by rounds.

// defining global variables

let ties = 0;
let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 1;
const maxGames = 3;

// will display every result as a <p> in the HTML document.

function displayMessage(message, selector) {
  let screen = document.querySelector("#" + selector);
  screen.setAttribute(
    "style",
    "font-size: 25px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
  );
  screen.textContent = `${message}`;
}
// logic to obtain computerChoice
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

let getComputerChoice = () => {
  let cChoice = assignComputerAChoice(compNumber());
  let computerChoiceMessage = `Computer chose: ${cChoice}`;
  displayMessage(computerChoiceMessage);
  return cChoice;
};

// logic to obtain humanChoice. Everything must initiate here, after the user clicks on a button.

// The control flow will wait until playround receives humanChoice
function getHumanChoice(playRound) {
  let choiceButton = document.querySelector("#buttonMenu");
  function handler(e) {
    let target = e.target.closest("button"); //this ensures that the event will only start if we click exactly on a button.

    let humanChoice; // if we create humanChoice before user clicks, it will be undefined

    if (!target) return; //if we don't click exactly on a button, nothing will happen
    let gamesPlayedMessage = `Round ${gamesPlayed} of ${maxGames}`;
    displayMessage(gamesPlayedMessage, "current-round");

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

    let humanChoiceMessage = `You chose: ${humanChoice}`;
    displayMessage(humanChoiceMessage);

    playRound(humanChoice);

    if (gamesPlayed > maxGames) {
      decideWinner();
      choiceButton.removeEventListener("click", handler);
    }
  }
  choiceButton.addEventListener("click", handler);
}

// logic to play a single round, having defined humanChoice
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  compareResults(computerChoice, humanChoice);
  let currentScore = `The score is: Human = ${humanScore} | Computer = ${computerScore}. | Ties = ${ties}. `;
  displayMessage(currentScore);

  gamesPlayed++;
}

// **** Logic to compare humanChoice and computerChoice and define the winner of the round

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
  displayMessage(winnerMessage);
}

// after playing a defined number of rounds, we decide who is the overall game winner.

function decideWinner() {
  const gameOverMessage = "GAME OVER.";
  displayMessage(gameOverMessage);
  let finalScore = `You won: ${humanScore} | Computer won: ${computerScore} | Ties: ${ties}.`;
  displayMessage(finalScore);

  let overallWinnerMessage;
  if (computerScore == humanScore) {
    overallWinnerMessage = "The overall game ends in a tie.";
  } else if (humanScore > computerScore) {
    overallWinnerMessage = "Congratulations! You won the overall game!";
  } else {
    overallWinnerMessage = "Sorry, you lost the overall game.";
  }
  displayMessage(overallWinnerMessage);

  addRestartButton();
}

function addRestartButton() {
  const gameScreen = document.querySelector("#game-screen");
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Game";
  restartButton.addEventListener("click", function cleanGameScreen(e) {
    let otherTarget = e.target.closest("button");
    if (!otherTarget) return;
    //cleans gameScreen after clicking the Restart button
    gameScreen.innerHTML = "";
    //resets variables
    computerScore = 0;
    humanScore = 0;
    ties = 0;
    gamesPlayed = 1;
    //removes number of rounds
    //returns functionality to the buttons (adds the event listener again)
    playGame();
    // removes the "number of rounds" text
  });
  gameScreen.appendChild(restartButton);
  restartButton.focus();
}

function playGame() {
  getHumanChoice(playRound);
}

playGame();
