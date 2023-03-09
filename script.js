// Initialize variables
let playerScore = 0;
let computerScore = 0;
let round = 1;

// Get elements from HTML
const roundText = document.getElementById("round");
const resultText = document.getElementById("result");

// Player makes a choice
function playerChoice(playerSelection) {

  // Computer makes a choice
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  if (playerSelection === "rock"){
    document.getElementById("player").src="resources/rock_player.png";
  
}
else if(playerSelection ==="paper"){
    document.getElementById("player").src="resources/paper_player.png";

 
}
else {
    document.getElementById("player").src="resources/scissor_player.png";  
}

if (computerSelection === "rock"){
 document.getElementById("computer").src="resources/rock_computer.png";  
 
}
else if (computerSelection === "paper"){
 document.getElementById("computer").src="resources/paper_computer.png";  
 
}
else {
 document.getElementById("computer").src="resources/scissor_computer.png";  
 
}





  // Compare player and computer choices
  if (playerSelection === computerSelection) {
    resultText.textContent = "Tie!";
    
  } else if (playerSelection === "rock" && computerSelection === "scissors" || 
            playerSelection === "paper" && computerSelection === "rock" || 
            playerSelection === "scissors" && computerSelection === "paper") {
    resultText.textContent = "You win!";
    playerScore++;
  } else {
    resultText.textContent = "Computer wins!";
    computerScore++;
  }

  // Display the round and scores
  roundText.textContent = `Round ${round}:`;
  round++;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

}