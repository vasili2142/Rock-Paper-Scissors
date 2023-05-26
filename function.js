//Global Variables
var playerWin = 0;
var computerWin = 0;
var draw = 0;
var resultsBox = document.getElementById("results");

//Player Logic
rock = () => {
  let rock = document.getElementById("pc").value;
  rock = "rock";
  document.getElementById('pc').value = "rock";
  return playGame(getComputerChoice(), rock);
}
paper = () => {
  let paper = document.getElementById("pc").value;
  paper = "paper";
  document.getElementById('pc').value = "paper";
  return playGame(getComputerChoice(), paper);
}
scissors = () => {
  let scissors = document.getElementById("pc").value;
  scissors = "scissors";
  document.getElementById('pc').value = "scissors";
  return playGame(getComputerChoice(), scissors);
}
//End of Player Logic

//AI logic
function getComputerChoice() {
  var computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 3) {
    return document.querySelector('#cpu').value = "scissors";
  } else if (computerChoice === 2) {
    return document.querySelector("#cpu").value = "paper";
  } else {
    return document.querySelector("#cpu").value = "rock";
  }
}

//Plays one round of rock, paper, scissors
function playGame(computerChoice, playerChoice) {
  // Draw Condition
  if (computerChoice === playerChoice) {
    ++draw;
    resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
  } else if (computerChoice !== playerChoice) {
    //AI Chooses Rock
    if (computerChoice == "rock" && playerChoice == "scissors") {      
      ++computerWin;
       resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
    } else if (computerChoice == "rock" && playerChoice == "paper") {      
      ++playerWin;
       resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
    }
    //AI Chooses Paper
    if (computerChoice == "paper" && playerChoice == "rock") {      
      ++computerWin;
       resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
    } else if (computerChoice == "paper" && playerChoice == "scissors") {      
      ++playerWin;
       resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
    }
    //AI Chooses Scissors
    if (computerChoice == "scissors" && playerChoice == "paper") {      
      ++computerWin;
       resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
      resultsBox.value = `CPU: ${computerWin}`;
    } else if (computerChoice == "scissors" && playerChoice == "rock") {      
      ++playerWin;
       resultsBox.value = `Player: ${playerWin} CPU: ${computerWin} Draw: ${draw}`;
    }
  }
  
  if(playerWin === 5 || computerWin === 5){    
    if(playerWin === 5){
      resultsBox.value = "Player Wins!";
      playerWin = 0;
      computerWin = 0;
      draw = 0; 
    } else {
      resultsBox.value = "Player sucks LOL!";
      playerWin = 0;
      computerWin = 0;
      draw = 0;
    }
  }
}
