console.log("Heyylo worldddd!");

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

console.log(getPlayerChoice());
