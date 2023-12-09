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

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let resultMessage = document.createElement('p');
let score = document.querySelector('#score');
let body = document.querySelector('body');
body.appendChild(resultMessage);

function playRound(computerChoice, playerChoice){

    if(computerChoice == playerChoice){
        resultMessage.textContent = "It's a tie! Let's play this round again.";
    }
    else if((computerChoice == "rock" && playerChoice == "scissors") || 
    (computerChoice == "paper" && playerChoice == "rock") || 
    (computerChoice == "scissors" && playerChoice == "paper")){
        computerScore++;
        resultMessage.textContent = `Sorry, but ${computerChoice} beats ${playerChoice}. You lost this round! `;
    }
    else{
        playerScore++;
        resultMessage.textContent = `${playerChoice} beats ${computerChoice}. You won this round!`;
    }
    score.textContent = `Score: ${playerScore}:${computerScore}`;
}

function endGame(){
    if(playerScore == 3)
        resultMessage.textContent = "Congratz! You win!";
    else 
        resultMessage.textContent = "You lost! Too bad.."; 
    buttons.forEach((button) => {
        button.remove();
    })
    let restartBtn = document.createElement('button');
    restartBtn.textContent = "Play again";
    body.appendChild(restartBtn);

    restartBtn.addEventListener('click', () => {
        window.location.reload();
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.value);
        if(playerScore == 3 || computerScore == 3)
            endGame();
    });    
})

