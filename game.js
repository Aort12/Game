
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        

        function getComputerChoice() {
        let words = ["rock", "paper", "scissors"];
        let randomWords = words[Math.floor(Math.random() * words.length)];
        alert(randomWords);
        return randomWords;
        }


        function getHumanChoice(){
            let choice = prompt('You can choose: paper, rock, scissors')
            
            return choice.toLowerCase();
        }
        

        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        
        if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
                humanScore++;
                alert('You win! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
            } else if(humanChoice == computerChoice) {
                alert('Its a tie! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
            } else if (humanChoice != 'paper' && humanChoice != 'rock' && humanChoice != 'scissors'){
                alert("You choice invalid element")
            } else {
                computerScore++;
                alert('You lose! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
            } 
        


    }



    let i = playRound();
    
    for (i=0; i<5; i++) {
        

    if (humanScore == 5){
        alert('You win the game)')
        break;
        
        
        
        } else if (computerScore == 5){
            alert('You lose this game')
            break; 
        }
        

     
     
     playRound();
    
    }
    
    
    

    
}

playGame();




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




