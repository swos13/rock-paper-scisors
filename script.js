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

function game(){
    let computerScore = 0;
    let computerChoice = '';
    let playerScore = 0;
    let playerChoice = '';
    let result = -1;

    while (playerScore < 3 && computerScore < 3){
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        result = playRound(computerChoice, playerChoice);

        if(result == 0)
            console.log("It's a tie! Let's play this round again. ");
        else if(result == 1){
            console.log(`Sorry, but ${computerChoice} beats ${playerChoice}. You lost this round! `);
            computerScore++;
        }
        else{
            console.log(`${playerChoice} beats ${computerChoice}. You won this round!`);
            playerScore++;
        }
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }
    if(playerScore > computerScore)
        console.log("Congratulations! You won the game!");
    else
        console.log("You lost the game! Too bad...");
}

game();