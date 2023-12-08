function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    return randomNumber == 0 ? "rock" : randomNumber == 1 ? "paper" : "scissors";
}

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice (rock, paper or scissors?)").toLowerCase();
    while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        playerChoice = prompt("This is not correct! What is your choice (rock, paper or scissors)?").toLowerCase();
    }
    return playerChoice;
}

function playRound(computerChoice, playerChoice){

    if(computerChoice == playerChoice)
        return 0;
    else if((computerChoice == "rock" && playerChoice == "scissors") || 
    (computerChoice == "paper" && playerChoice == "rock") || 
    (computerChoice == "scissors" && playerChoice == "paper"))
        return 1;
    else
        return 2;
}
