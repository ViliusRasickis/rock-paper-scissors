function game() {
    let userScore = 0;
    let computerScore = 0;
    let computerSelection = computerPlay();
    let amountOfGames = prompt("How many games you would like to play?");
    
    for (let i = 0; i < amountOfGames; i++) {

        let playerSelection = "";
        choiceCorrect = true;
        while (choiceCorrect === true) {
            playerSelection = prompt("Choose your destiny! Rock Paper Scissors");
            if (playerSelection === null) {
                console.log("Sorry to see you go.");
                console.log("Game over. Final result. " + "User: " + userScore + ', ' + "Computer: " + computerScore);
                return;
            } else {
                playerSelection = playerSelection.toLowerCase();
            }

            if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                choiceCorrect = false;
            } else {
                alert("You've made an incorrect choice, please choose from Rock Paper Scissors.")
            }
        }

      playsRPS(playerSelection, computerPlay());
        function playsRPS(playerSelection, computerSelection) {
            if (playerSelection === "paper" && computerSelection === "scissors") {
                console.log("You chose paper, computer chose scissors. Sorry you lost!");
                computerScore++;
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                console.log("You chose paper, computer chose rock. Gratz, winner!");
                userScore++;
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You chose rock, computer chose paper. Sorry you lost!");
                computerScore++;
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("You chose rock, computer chose scissors. Gratz, winner!");
                userScore++;
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                console.log("You chose scissors, computer chose rock. Sorry you lost!");
                computerScore++;
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                console.log("You chose scissors, computer chose paper. Gratz, winner!");
                userScore++;
            } else {
                console.log("Tie!");
            }
            console.log("User: " + userScore + ', ' + "Computer: " + computerScore);
        }        
    }
    console.log("The final score is - User: " + userScore + ', ' + "Computer: " + computerScore);
}
function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result === 1) {
        return "rock";
    } else if (result === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}