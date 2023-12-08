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
        console.log("It's a tie! Let's play this round again. ");
    else if((computerChoice == "rock" && playerChoice == "scissors") || 
    (computerChoice == "paper" && playerChoice == "rock") || 
    (computerChoice == "scissors" && playerChoice == "paper"))
        console.log(`Sorry, but ${computerChoice} beats ${playerChoice}. You lost this round! `);
    else
        console.log(`${playerChoice} beats ${computerChoice}. You won this round!`);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.value)})
})
