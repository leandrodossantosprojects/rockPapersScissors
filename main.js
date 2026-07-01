let btn = document.querySelectorAll(".choice");

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

function getHumanChoice() {
  let choice = "";
  return choice.trim().toLowerCase();
}

btn.forEach((boton) =>
  boton.addEventListener("click", function () {
    let humanChoice = (texto = boton.textContent.trim());
    let computerChoice = getComputerChoice();
    let result;
    if (humanChoice === computerChoice) {
      result = console.log("It's a tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      result = console.log(`You won, ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      result = console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
    }
    return result;
  }),
);

/*function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner;
  function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
      result = console.log("It's a tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      result = console.log(`You won, ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      result = console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    return result;
  }
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
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
}*/
