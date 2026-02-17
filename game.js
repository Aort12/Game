
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
    
    for (i=0; i<11; i++) {
        

    if (humanScore == 5){
        alert('You win the game)');
        break;
        
        
        
        } else if (computerScore == 5){
            alert('You lose this game');
            break; 
        
        } else if (i == 10){
            alert('Game is end, try again');
            break;
        }
     
     
     playRound();
    
    }
    
    
    

    
}

playGame();





