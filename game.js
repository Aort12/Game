function getComputerChoice() {
    const words = ["Rock", "Paper", "Scissors"];
    const randomWords = words[Math.floor(Math.random() * words.length)];
    return randomWords
    }

console.log(getComputerChoice())