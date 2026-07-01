let btn = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let counterCom = document.querySelector("#counter-com");
let counterHuman = document.querySelector("#counter-human");

function getComputerChoice() {
  let choice;

  let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (randomNum) {
    case 1:
      choice = "scissors";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "rock";
      break;
  }
  return choice;
}

let humanCount = 0;
let comCount = 0;

function humanChoice(boton) {
  boton.addEventListener("click", () => boton.textContent.trim().toLowerCase());
}

btn.forEach(humanChoice);

/*btn.forEach((boton) =>
  boton.addEventListener("click", function () {
    let humanChoice = boton.textContent.trim().toLowerCase();
    let computerChoice = getComputerChoice();
    let result;
    if (humanChoice === computerChoice) {
      msg.textContent = "It's a tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      msg.textContent = `You won, ${humanChoice} beats ${computerChoice}.`;
      humanCount += 1;
    } else {
      msg.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
      comCount += 1;
    }
    counterCom.textContent = comCount;
    counterHuman.textContent = humanCount;
    return result;
  }),
);*/

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner;
  function playRound(humanChoice, getComputerChoice) {
    let result;
    if (humanChoice === getComputerChoice) {
      result = console.log("It's a tie");
    } else if (
      (humanChoice === "rock" && getComputerChoice === "scissors") ||
      (humanChoice === "scissors" && getComputerChoice === "paper") ||
      (humanChoice === "paper" && getComputerChoice === "rock")
    ) {
      result = console.log(
        `You won, ${humanChoice} beats ${getComputerChoice}.`,
      );
      humanScore++;
      counterHuman.textContent = humanScore;
    } else {
      result = console.log(
        `You lose. ${getComputerChoice} beats ${humanChoice}.`,
      );
      computerScore++;
      counterCom.textContent = computerScore;
    }
    return result;
  }
  for (i = 0; i < 5; i++) {
    playRound(humanChoice(), getComputerChoice());
  }

  if (humanScore === computerScore) {
    winner = alert(`
          COM = ${computerScore}
          YOU = ${humanScore}
          Tie game`);
  } else if (humanScore > computerScore) {
    winner = alert(`
          COM = ${computerScore}
          YOU = ${humanScore}
          You won the game`);
  } else {
    winner = alert(`
        COM = ${computerScore}
        YOU = ${humanScore}
        You lose the game`);
  }
}
