// This is a Rock, Paper, Scissors game
// The game has two players, the human player and the computer player 
// Each game will last one round, with each round consisting of one choice from each player 
// The choices will be evaluated by a function, which will produce an alert 
// The alert will let the players know who won the game 

// Rules
// rock > scissors
// paper > rock 
// scissors > paper 

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 4) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();

function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "Draw";
    }
    else if (computerChoice == "Rock") {
        if (playerChoice == "Scissors") {
            return "Computer wins";
        } else {
            return "Human wins";
        }
    } else if (computerChoice == "Paper") {
        if (playerChoice == "Rock") {
            return "Computer wins";
        } else {
            return "Human wins";
        }
    } else if (computerChoice == "Scissors") {
        if (playerChoice == "Paper") {
            return "Computer wins";
        } else {
            return "Human wins";
        }
    } 
}

function game() {
    for (let i = 0; i < 5; i++) { 
        let playerInput = String(prompt("Rock, Paper, Scissors?"));
        let playerChoice = (playerInput.charAt(0).toUpperCase() + playerInput.substring(1).toLowerCase());
        getComputerChoice;
        console.log(playRound(computerChoice, playerChoice));
        
        score;
    } 
}

function score() {
    let playerScore = 0;
    let computerScore = 0;

    if (game == "Human wins") {
        playerScore++;
    } else if (game == "Computer wins") {
        computerScore++;
    }

    console.log(`Player Score: ${playerScore}, Computer Score ${computerScore}`);
}

console.log(game());