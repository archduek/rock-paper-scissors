// This is a Rock, Paper, Scissors game
// The game has two players, the human player and the computer player 
// Each game will last one round, with each round consisting of one choice from each player 
// The choices will be evaluated by a function, which will produce an alert 
// The alert will let the players know who won the game 

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

const computerChoice = getComputerChoice();
const playerChoice = prompt("Rock, Paper, Scissors?");

function rules(playerChoice, computerChoice) {
    
    if (playerChoice == computerChoice) {
        return "Draw";
    }
    else if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            return "Human wins";
        } else {
            return "Computer wins";
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            return "Human wins";
        } else {
            return "Computer wins";
        }
    } else if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            return "Human wins";
        } else {
            return "Computer wins";
        }
    }
}

function playRound() {
    for (let i = 0; i < 5; i++);
    rules();
}

function game() {
    playRound();
}

// rock > scissors
// paper > rock 
// scissors > paper 
