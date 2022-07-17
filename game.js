/** Define global variables */
const g_Choices = ['rock', 'paper', 'scissors']
let g_UserScore = 0;
let g_ComScore = 0;

/** Get DOM elements */
let scoreBoard = document.getElementById('score-text').innerHTML
let menuText = document.getElementById('menu-text').innerHTML
const playerImage = document.getElementById('playerImage')
const machineImage = document.getElementById('machineImage')
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const newGameButton = document.getElementById('newgame')


/** Game Logic */

/**
 * function that generates psedorandom choice for the machine
 * @return {string} random choice
 */
let getComputerChoice = function(){
    return g_Choices[Math.floor(Math.random()*3)]
}

/**
 * play a round of janken
 * @param {string}playerSelection the choice of the user
 * @return {string} round winner
 */

let playRound = function(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection)
    updateImages(playerSelection, computerSelection)

    // if both user and com have the same choice
    if (playerSelection === computerSelection){
       document.getElementById('menu-text').innerHTML = 'Tie!';
    }

    // cases if user wins
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock'){
        document.getElementById('menu-text').innerHTML = 'You win this round!';
        g_UserScore++; // increment user score.
    }

    // cases where com wins
    else {
        document.getElementById('menu-text').innerHTML = 'Computer won this round!';
        g_ComScore++; // increment computer score
    }

    // update scoreboard
    document.getElementById('score-text').innerHTML = 'Score: ' + g_UserScore.toString() + ' | ' + g_ComScore.toString();
    
    checkGameOver();
}
/**
 * Check if the game is over
 */
let checkGameOver = function(){
    if(g_UserScore == 5 || g_ComScore == 5){
        (g_UserScore > g_ComScore)? alert('You win!'): alert('You lose!');
        resetGame();
    }
}

/**
 * Resets the game.
 */
let resetGame = function(){
    document.getElementById('menu-text').innerHTML = '';
    g_ComScore = 0; g_UserScore = 0;
    playerImage.src = 'rps/question-mark_toss.png';
    machineImage.src = 'rps/question-mark_toss.png';
    document.getElementById('score-text').innerHTML = 'Score:'
}

/**
 * function that updates the choice images
 * @param {string}userChoice the choice of the user
 * @param {string}comChoice the choice of the computer
 */
let updateImages = function(userChoice, comChoice){
    playerImage.src = `rps/${userChoice}_toss.png`;
    machineImage.src = `rps/${comChoice}_toss.png`;
}

/** Button events */
rockButton.addEventListener('click', function(){
    playRound(g_Choices[0], getComputerChoice());
});

paperButton.addEventListener('click', function(){
    playRound(g_Choices[1], getComputerChoice());
});

scissorsButton.addEventListener('click', function(){
    playRound(g_Choices[2], getComputerChoice());
});

newGameButton.addEventListener('click', function(){
    resetGame();
})