let humanScore = 0;
let computerScore = 0;


document.getElementById('start').addEventListener('click', playGame);
document.getElementById('start').addEventListener('click', hidestart)
document.getElementById('start').addEventListener('click', ()=> {
    document.getElementById('computerch').style.display = 'flex';
})

function hidestart () {
    let but = document.getElementById('start');
    but.style.display = "none";
}



function getComputerChoice() {
        let words = ["Rock", "Paper", "Scissors"];
        let randomWords = words[Math.floor(Math.random() * words.length)];
        document.getElementById('computerch').textContent = randomWords;
        return randomWords;
    }

    function playGame() {
        function playRound(){
            
            document.getElementById('Rock').addEventListener('click', variants);
            document.getElementById('Paper').addEventListener('click', variants);
            document.getElementById('Scissors').addEventListener('click', variants);
            document.getElementById('nextroundbtn').addEventListener('click', nextrou);

        

        function variants(event){
            const computerChoice = getComputerChoice();
            const humanChoice = event.target.id
            if (
                (humanChoice == "Rock" && computerChoice == "Scissors") ||
                (humanChoice == "Paper" && computerChoice == "Rock") ||
                (humanChoice == "Scissors" && computerChoice == "Paper")) {
                    humanScore++;
                    document.getElementById('resoult').textContent = 'You win! Score: You - ' + humanScore + ', Computer Score - ' + computerScore;
                } else if(humanChoice == computerChoice) {
                    document.getElementById('resoult').textContent = 'Its a tie! Score: You - ' + humanScore + ', Computer Score - ' + computerScore;
                } else {
                    computerScore++;
                    document.getElementById('resoult').textContent = 'You lose! Score: You - ' + humanScore + ', Computer Score - ' + computerScore;
        
                } 
            
            if (humanScore == 5){
                    alert('You win the all game)');
                    location.reload() 
                } else if (computerScore == 5){
                    alert('You lose the all game)');
                    location.reload()
                }
                
                }}
            
        function nextrou (){
            document.getElementById('computerch').textContent = 'ㅤㅤㅤㅤㅤ';
            document.getElementById('resoult').textContent = 'ㅤㅤㅤㅤㅤ';
            return playRound();

        }
            
            playRound();
        }

                

            
            
        


