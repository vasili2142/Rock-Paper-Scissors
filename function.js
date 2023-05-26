//Global Variables
var playerWin = 0;
var computerWin = 0;
var draw = 0;

//Player Logic
function playerChoice() {
//   let pc = document.querySelectorAll('button');
//   let btn = document.getElementById('button').value;
//   console.log(btn);
  
//   rock = pc[0];
//   paper = pc[1];
//   scissors = pc[2];
  
//   rock.onclick = function (){
//     document.getElementById('pc').value = "rock";
//     result();
//     return playGame(getComputerChoice(), btn);
    
//   }
//   paper.onclick = function (){
//     document.getElementById('pc').value = "paper";
//     playGame(getComputerChoice(), btn);
//     result();
//     return playGame(getComputerChoice(), btn);
//   }
//   scissors.onclick = function (){
//     document.getElementById('pc').value = "scissors";
//     playGame(getComputerChoice(), playerChoice());
//     result();
//     return playGame(getComputerChoice(), btn);
//   }

  
}

function rock() {
  let rock = document.getElementById("pc").value;
  rock = "rock";
  document.getElementById('pc').value = "rock";
  return playGame(getComputerChoice(), rock);
}

//AI decision logic
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





playerChoice();

//  playerChoice();

// playGame(getComputerChoice(), playerChoice());




// Loops the game for 5 rounds
// function game(){
//   for (let round = 1; round <= 5; round++) {
//     playGame(getComputerChoice(), playerChoice());
//     console.log("Player Wins: " + playerWin);
//     console.log("Computer Wins: " + computerWin);
//     console.log("\n");
//   } 
// } 
// game();

// Outputs stats
function result(){
  if (playerWin > computerWin){
    console.log("Player Wins!!!");
  } else if (playerWin === computerWin){
    console.log("Draw");
  } else {console.log("Player Sucks LOL");}
}

// console.log(`Final Score: Player - ${playerWin} Computer - ${computerWin} Draw(s) - ${draw}`);
// console.log(result());
