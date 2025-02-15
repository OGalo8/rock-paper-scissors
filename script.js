//A script to play a simple Rock,Paper,Scissors game by rounds.

// defining global variables

let ties = 0;
let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 1;
let winnerMessage;
const roundWinnerScreenSelector = document.querySelector("#roundWinnerScreen")
const maxGames = 3;


// will display every result as a <p> in the HTML document.

function displayMessage(message, selector) {
  let screen = document.querySelector(selector);
  screen.setAttribute(
    "style",
    "font-size: 25px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
  );
  screen.textContent = message;
}

//function to set style to some buttons
function setStyle(chosenTarget){
  chosenTarget.setAttribute("style", "background-color: #2E1A47; color: #FFFFFF");
}

//function to remove style to all buttons
function removeButtonStyle(){
  let allButtons = document.querySelectorAll("button");
  allButtons.forEach(button => button.removeAttribute("style")); //allbuttons is a node list, so we need to apply forEach
  }

// logic to obtain computerChoice
function assignComputerAChoice(num) {
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
  }
  return decision;
}

let compNumber = () => Math.floor(Math.random() * 3) + 1;

let getComputerChoice = () => {
  let cChoice = assignComputerAChoice(compNumber());
  displayMessage(cChoice, "#cChoiceScreen");
  return cChoice;
};

// logic to obtain humanChoice. Everything must initiate here, after the user clicks on a button.

// The control flow will wait until playround receives humanChoice
function getHumanChoice(playRound) {
    let choiceButton = document.querySelector(".firstRow");
    function handler(e) {
      let target = e.target.closest("button"); // This ensures that the event will only start if we click exactly on a button.
      if (!target) return; // If we don't click exactly on a button, nothing will happen.
  
      // Remove purple/white style from all buttons
      removeButtonStyle();

      // Set background color for the clicked button
      setStyle(target);

      // if we create humanChoice before user clicks, it will be undefined
      let humanChoice;
  
      let gamesPlayedMessage = `Round ${gamesPlayed} of ${maxGames}`;
      displayMessage(gamesPlayedMessage, "#currentRoundScreen");
  
      switch (target.id) {
        case "rockButton":
          humanChoice = "Rock";
          break;
        case "paperButton":
          humanChoice = "Paper";
          break;
        case "scissorsButton":
          humanChoice = "Scissors";
          break;
      }
  
      playRound(humanChoice, target);
  
      if (gamesPlayed > maxGames) {
        
        decideWinner();
        choiceButton.removeEventListener("click", handler);
        restartButton();
      }
    }
    choiceButton.addEventListener("click", handler);
  }
  
// logic to play a single round, having defined humanChoice
function playRound(humanChoice, target) {
  let computerChoice = getComputerChoice();

  compareResults(computerChoice, humanChoice);
  displayMessage(humanScore,"#hScoreScreen");
  displayMessage(computerScore,"#cScoreScreen");

  gamesPlayed++;
}

// **** Logic to compare humanChoice and computerChoice and define the winner of the round

function compareResults(cc, hc) {
  if (cc == hc) {
    ties++;
    winnerMessage = "Tie";
  } else if (
    (cc == "Rock" && hc == "Scissors") ||
    (cc == "Paper" && hc == "Rock") ||
    (cc == "Scissors" && hc == "Paper")
  ) {
    computerScore++;
    winnerMessage = "You lose";
  } else if (
    (hc == "Rock" && cc == "Scissors") ||
    (hc == "Paper" && cc == "Rock") ||
    (hc == "Scissors" && cc == "Paper")
  ) {
    humanScore++;
    winnerMessage = `You win!`;
  }
  displayMessage(winnerMessage,"#roundWinnerScreen");
}

// after playing a defined number of rounds, we decide who is the overall game winner.

function decideWinner() {
  if (computerScore == humanScore) {
    winnerMessage = "Final result: Tie 🤝";
  } else if (humanScore > computerScore) {
    winnerMessage = "Final result: You Win 🥳";
  } else {
    winnerMessage = "Final result: You lose 🤫";
  }
  displayMessage(winnerMessage,"#roundWinnerScreen");
  setStyle(roundWinnerScreenSelector);
}

function restartButton() {
  const restartButton = document.querySelector("#restartButton");
  restartButton.addEventListener("click", function cleanGameScreen(e) {
    let otherTarget = e.target.closest("button");
    if (!otherTarget) return;
    //resets variables
    computerScore = 0;
    humanScore = 0;
    ties = 0;
    gamesPlayed = 1;
    //removes previous results and styles
    displayMessage("","#hScoreScreen");
    displayMessage("","#cScoreScreen");
    displayMessage("","#cChoiceScreen");
    displayMessage(`Round ${gamesPlayed} of ${maxGames}`,"#currentRoundScreen");
    displayMessage("","#roundWinnerScreen");
    removeButtonStyle();
    roundWinnerScreenSelector.removeAttribute("style");
    //returns functionality to the buttons (adds the event listener again)
    playGame();
    // removes the event listener from restartButton
    restartButton.removeEventListener("click", cleanGameScreen);
  });
}

function playGame() {
  getHumanChoice(playRound);

}

playGame();
