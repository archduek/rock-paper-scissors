// This is a Rock, Paper, Scissors game
// The game has two players, the human player and the computer player 
// Each game will last one round, with each round consisting of one choice from each player 
// The choices will be evaluated by a function, which will produce an alert 
// The alert will let the players know who won the game 

// Rules
// rock > scissors
// paper > rock 
// scissors > paper 

playOptions = [0, 1, 2];

function getComputerChoice(items) {
    let choice = items[Math.floor(Math.random()*items.length)];
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Scissors";
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "Draw";
    } else if (computerChoice == "Rock") {
        if (playerChoice == "Scissors") {
            return "Computer wins";
        } else {
            return "Player wins";
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
            return "Player wins";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let input = String(prompt("Rock, Paper, Scissors?"));
        let playerChoice = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
        let computerChoice = getComputerChoice(playOptions);
        console.log(playRound(computerChoice, playerChoice));
    }
}

console.log(game());