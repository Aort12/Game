let humanScore = 0;
let computerScore = 0;


document.getElementById('start').addEventListener('click', playGame);

function getComputerChoice() {
        let words = ["rock", "paper", "scissors"];
        let randomWords = words[Math.floor(Math.random() * words.length)];
        alert(randomWords)
        return randomWords;
    }

    function playGame() {
        function playRound(){
            
            
            

            document.getElementById('rock').addEventListener('click', variants);
            document.getElementById('paper').addEventListener('click', variants);
            document.getElementById('scissors').addEventListener('click', variants);

        function variants(event){
            const computerChoice = getComputerChoice();
            const humanChoice = event.target.id
            if (
                (humanChoice == "rock" && computerChoice == "scissors") ||
                (humanChoice == "paper" && computerChoice == "rock") ||
                (humanChoice == "scissors" && computerChoice == "paper")) {
                    humanScore++;
                    console.log('You win! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
                } else if(humanChoice == computerChoice) {
                    console.log('Its a tie! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
                } else {
                    computerScore++;
                    console.log('You lose! Score: You - ' + humanScore + ', Computer Score - ' + computerScore);
        
                } 
            
            if (humanScore == 5){
                    alert('You win the all game)');
                    location.reload() 
                } else if (computerScore == 5){
                    alert('You lose the all game)');
                    location.reload()
                }
                
                }}
            start.disabled = true;
            playRound();
        }

                

            
            
        


