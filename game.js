


function getComputerChoice() {
    let words = ["rock", "paper", "scissors"];
    let randomWords = words[Math.floor(Math.random() * words.length)];
    alert (randomWords);
    return randomWords;
    }

console.log(getComputerChoice());


function getHumanChoice(){
    let choice = prompt('You can choose: paper, rock, scissors');
    if (["rock", "paper", "scissors"].includes(choice)){
        return choice;
    }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound() {
    const ComputerChoice = getComputerChoice();
    const HumanChoice = getHumanChoice();

    if (
        (HumanChoice == "rock" && ComputerChoice == "scissors") ||
        (HumanChoice == "paper" && ComputerChoice == "rock") ||
        (HumanChoice == "scissors" && ComputerChoice == "paper")) {
            humanScore++;
            alert('You win! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
        } else if(HumanChoice == ComputerChoice) {
            alert('Its a tie! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
        } else {
            computerScore++;
            alert('You lose! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
        }


}
        
    console.log(playRound())



    





 


/*if (
        (getHumanChoice == "rock" && getComputerChoice == "scissors") ||
        (getHumanChoice == "paper" && getComputerChoice == "rock") ||
        (getHumanChoice == "scissors" && getComputerChoice == "paper")) {
            ++humanScore;
            alert('You win! Your score:' + (humanScore),'Computer Score:' + (computerScore))
        } else if(getHumanChoice == getComputerChoice) {
            alert('Its a tie! Your score:' + (humanScore), 'Computer Score:' + (computerScore))
        } else {
            ++computerScore;
            alert('You lose! Your score:' + (humanScore), 'Computer Score:' + (computerScore))
        }
    */




