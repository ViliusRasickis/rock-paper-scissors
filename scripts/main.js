let amountOfGames = 0;
let userScore = 0;
let computerScore = 0;
let games = 0;
let ties = 0;
let info;
let beginning;
let midGame;

function saveAmount(event) {
    amountOfGames = document.getElementById('num').value;
    info = document.getElementById('info');
    amountOfGames = parseInt(amountOfGames);
    if(amountOfGames < games) {
        return info.innerHTML = "Please reset the game!";
    } else {
        info = document.getElementById("info");
        document.getElementById('num').value = 0; // reset the value in the input
        beginning = document.getElementById("beginning");
        midGame = document.getElementById("midGame");
        if (amountOfGames === 0) {
            info.innerHTML = "Please choose more than 0 games.";
        } else {
        info.innerHTML = "You chose to play: " + amountOfGames + " games.";

        beginning.innerHTML = "Choose your destiny! Rock Paper Scissor";

        midGame.innerHTML = "Current score is: User: " + userScore + ";" + " Computer: " + computerScore;
        }
    }
}

function rockChoice() {
    const rockElement = document.getElementById('rock');
    let rockId = rockElement.id;
    playSound(rockId);
    gameStart(rockId);
}

function paperChoice() {
    const paperElement = document.getElementById('paper')
    let paperId = paperElement.id;
    playSound(paperId);
    gameStart(paperId);
}

function scissorsChoice() {
    const scissorsElement = document.getElementById('scissors');
    let scissorsId = scissorsElement.id;
    playSound(scissorsId);
    gameStart(scissorsId);
}

function gameStart(input) {
    if (amountOfGames === 0) {
        return score.innerHTML = '';
    } else if (games === amountOfGames) {
        return score.innerHTML = "The final score is - User: " + userScore + ', ' + "Computer: " + computerScore + '. ' + "Please proceed with another game.";
    } else if (amountOfGames < games) {
        return info.innerHTML = "Please reset the game!";
    } else {
        let computerSelection = computerPlay();
        let playerSelection = input;

        playsRound(playerSelection, computerSelection);
        if(games === amountOfGames) {
            score.innerHTML = "The final score is - User: " + userScore + ', ' + "Computer: " + computerScore + '. ' + "Please proceed with another game.";
        } else {
            return score.innerHTML = "User: " + userScore + ', ' + "Computer: " + computerScore + '<br/>'
            + "Ties: " + ties + ', ' + "Total games: " + games;
        }
    }
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

function playsRound(playerSelection, computerSelection) {
    ++games;
     if (playerSelection === "paper" && computerSelection === "scissors") {
        midGame.innerHTML = ("You chose paper, computer chose scissors. Sorry you lost!");
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        midGame.innerHTML = ("You chose paper, computer chose rock. Gratz, winner!");
        userScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        midGame.innerHTML = ("You chose rock, computer chose paper. Sorry you lost!");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        midGame.innerHTML = ("You chose rock, computer chose scissors. Gratz, winner!");
        userScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        midGame.innerHTML = ("You chose scissors, computer chose rock. Sorry you lost!");
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        midGame.innerHTML = ("You chose scissors, computer chose paper. Gratz, winner!");
        userScore++;
    } else {
        midGame.innerHTML = ("Tie!");
        ties++;
    }
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
    games = 0;
    ties = 0;
    info.innerHTML = '';
    beginning.innerHTML = '';
    midGame.innerHTML = '';
    score.innerHTML = '';
}

function playSound(input) {
    if(input === 'rock') {
        const audio = document.getElementById('rocksong');
        audio.currentTime = 0;
        audio.play();
    } else if (input === 'paper') {
        const audio = document.getElementById('papersong');
        audio.currentTime = 0;
        audio.play();
    } else {
        const audio = document.getElementById('scissorssong');
        audio.currentTime = 0;
        audio.play();
    }
}