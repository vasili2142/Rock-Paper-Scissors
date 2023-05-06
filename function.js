//Global Variables
var playerWin = 0;
var computerWin = 0;
var draw = 0;

//AI decision logic
function getComputerChoice() {
  var computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 3) {
    return "scissors";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "rock";
  }
}

//Player Logic
function playerChoice() {
  var playerChoice = prompt("Choose: Rock, Paper, or Scissors");
  return playerChoice.toLowerCase();
}

//Plays one round of rock, paper, scissors
function playGame(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    console.log(
      `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
    );
    console.log("Draw");
    ++draw;
  } else if (computerChoice !== playerChoice) {
    //AI Chooses Rock
    if (computerChoice == "rock" && playerChoice == "scissors") {
      console.log(
        `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
      );
      console.log("Player Lose");
      ++computerWin;
    } else if (computerChoice == "rock" && playerChoice == "paper") {
      console.log(
        `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
      );
      console.log("Player Win");
      ++playerWin;
    }

    //AI Chooses Paper
    if (computerChoice == "paper" && playerChoice == "rock") {
      console.log(
        `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
      );
      console.log("Player Lose");
      ++computerWin;
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
      console.log(
        `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
      );
      console.log("Player Win");
      ++playerWin;
    }

    //AI Chooses Scissors
    if (computerChoice == "scissors" && playerChoice == "paper") {
      console.log(
        `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
      );
      console.log("Player Lose");
      ++computerWin;
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
      console.log(
        `Player Choice: ${playerChoice} vs AI Choice: ${computerChoice}`
      );
      console.log("Player Win");
      ++playerWin;
    }
  }
}

function result(){
  if (playerWin > computerWin){
    console.log("Player Wins!!!");
  } else if (playerWin === computerWin){
    console.log("Draw");
  } else {console.log("Player Sucks LOL");}
}

function game(){
  for (let round = 1; round <= 5; round++) {
    playGame(getComputerChoice(), playerChoice());
    console.log("Player Wins: " + playerWin);
    console.log("Computer Wins: " + computerWin);
    console.log("\n");
  } 
} game();

console.log(`Final Score: Player - ${playerWin} Computer - ${computerWin} Draw(s) - ${draw}`);
console.log(result());
