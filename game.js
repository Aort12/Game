function getComputerChoice() {
    const words = ["Rock", "Paper", "Scissors"];
    const randomWords = words[Math.floor(Math.random() * words.length)];
    return randomWords
    }

console.log(getComputerChoice());


function getHumanChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const yourchoice = window.prompt('Your choice? You can choose Rock, Paper, Scissors').toLowerCase();
    return yourchoice;
}

console.log(getHumanChoice());

let humanScore 
humanScore = '0';

let computerScore
computerScore = '0';

alert(humanScore, computerScore);

console.log(humanScore, computerScore);

function playRound(HumanChoice, ComputerChoice) {
    
}

console.log(playRound());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);