function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    return randomNumber == 0 ? "rock" : randomNumber == 1 ? "paper" : "scissors";
}

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice (rock, paper or scissors?").toLowerCase();
    while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        playerChoice = prompt("This is not correct! What is your choice (rock, paper or scissors?").toLowerCase();
    }
    return playerChoice;
}

function playGame(computerChoice, playerChoice){

    if(computerChoice == playerChoice)
        return "It's a tie! Let's play this round again. ";
    else if((computerChoice == "rock" && playerChoice == "scissors") || 
    (computerChoice == "paper" && playerChoice == "rock") || 
    (computerChoice == "scissors" && playerChoice == "paper"))
        return `Sorry, but ${computerChoice} beats ${playerChoice}. You lost! `;
    else
        return `${playerChoice} beats ${computerChoice}. You won!`;
}

console.log(playGame("scissors", "scissors"));