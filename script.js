console.log("Heyylo worldddd!");

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    return randomNumber == 0 ? "rock" : randomNumber == 1 ? "paper" : "scissor";
}

console.log(getComputerChoice());