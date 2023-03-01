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
        return "Scissors";
    } else if (choice === 3) {
        return "Paper";
    }
}