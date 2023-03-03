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

function getPlayerChoice() {
    let choice = String(prompt("Rock, Paper, Scissors?"));
    return (choice.charAt(0).toUpperCase() + choice.substring(1).toLowerCase());
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function playRound(computerChoice, playerChoice) {
    if (computerChoice == "Rock") {
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
    } else {
        return "Draw";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        return playRound(computerChoice, playerChoice);
    }
}

// rock > scissors
// paper > rock 
// scissors > paper 
