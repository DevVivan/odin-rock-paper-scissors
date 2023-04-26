let userSelection;
let userScore = 0;
let computerScore = 0;
let userScoreHTML = document.querySelector(".user-score");
let computerScoreHTML = document.querySelector(".computer-score");
let userScoreValueChanging;
let computerScoreValueChanging;
let displayImages = document.getElementsByClassName("score-display");

const overlay = document.querySelector(".overlay");

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function hideOverlay() {
  overlay.style.display = 'none';
}

function showOverlay() {
  overlay.style.display = 'block';
}


// Function to choose a random option from "Rock", "Paper" and "Scissors"

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    let randomOption = options[Math.floor(Math.random()*options.length)];
    return (randomOption);
}



window.onload = function() {
    let rockClick = document.getElementById('rockButton');
    let paperClick = document.getElementById('paperButton');
    let scissorsClick = document.getElementById('scissorsButton');

    // Function to get player choice

    function getPlayerChoice () {

        rockClick.addEventListener('click', async () => {
            userSelection = "rock";
            playRound(userSelection)

            // to stop bouncing animation on userChoiceImage
            const scoreDisplay = document.querySelector('.score-display');
            scoreDisplay.style.animation = 'none';

            // to stop bouncing animation of computerChoiceImage
            const computerChoiceImage = document.querySelector('#computerChoiceImage');
            computerChoiceImage.style.animation = 'none';

            // delay using overlay 
            showOverlay();
            await delay(2000);
            hideOverlay();

            // bring back rock images after delay
            document.getElementById("userChoiceImage").src = "images/rock.png";
            document.getElementById("computerChoiceImage").src = "images/rock.png";

            // to restart bouncing animation after delay
            userChoiceImage.setAttribute('style', 'animation: bounce 0.7s ease-in-out infinite;');
            computerChoiceImage.setAttribute('style', 'animation: bounce 0.7s ease-in-out infinite;');
        })

        paperClick.addEventListener('click', async () => {
            userSelection = "paper";
            playRound(userSelection)

            // to stop bouncing animation on userChoiceImage
            const scoreDisplay = document.querySelector('.score-display');
            scoreDisplay.style.animation = 'none';


            // to stop bouncing animation of computerChoiceImage
            const computerChoiceImage = document.querySelector('#computerChoiceImage');
            computerChoiceImage.style.animation = 'none';

            // delay using overlay 
            showOverlay();
            await delay(2000);
            hideOverlay();

            // bring back rock images after delay
            document.getElementById("userChoiceImage").src = "images/rock.png";
            document.getElementById("computerChoiceImage").src = "images/rock.png";

            // to restart bouncing animation after delay
            userChoiceImage.setAttribute('style', 'animation: bounce 0.7s ease-in-out infinite;');
            computerChoiceImage.setAttribute('style', 'animation: bounce 0.7s ease-in-out infinite;');
        })

        scissorsClick.addEventListener('click', async () => {
            userSelection = "scissors";            
            playRound(userSelection)

            // to stop bouncing animation on userChoiceImage
            const scoreDisplay = document.querySelector('.score-display');
            scoreDisplay.style.animation = 'none';

             // to stop bouncing animation of computerChoiceImage
            const computerChoiceImage = document.querySelector('#computerChoiceImage');
            computerChoiceImage.style.animation = 'none';

            // delay using overlay 
            showOverlay();
            await delay(2000);
            hideOverlay();

            // bring back rock images after delay
            document.getElementById("userChoiceImage").src = "images/rock.png";
            document.getElementById("computerChoiceImage").src = "images/rock.png";

            // to restart bouncing animation after delay
            userChoiceImage.setAttribute('style', 'animation: bounce 0.7s ease-in-out infinite;');
            computerChoiceImage.setAttribute('style', 'animation: bounce 0.7s ease-in-out infinite;');
        })
    }
    userSelection = getPlayerChoice();

    // Function to play a single round of the game

    function playRound () {

        let computerSelection = getComputerChoice();

        // if user chooses rock

        if (userSelection == 'rock' && computerSelection == 'rock') {
            document.getElementById("userChoiceImage").src = "images/rock.png";
            document.getElementById("computerChoiceImage").src = "images/rock.png";
        } else if (userSelection == 'rock' && computerSelection == 'scissors') {
            document.getElementById("userChoiceImage").src = "images/rock.png";
            document.getElementById("computerChoiceImage").src = "images/scissors.png";
            userScore += 1;
            userScoreHTML.innerHTML = userScore;
        } else if (userSelection == 'rock' && computerSelection == 'paper') {
            document.getElementById("userChoiceImage").src = "images/rock.png";
            document.getElementById("computerChoiceImage").src = "images/paper.png";
            computerScore += 1;
            computerScoreHTML.innerHTML = computerScore;
        }

        // if user chooses paper

        if (userSelection == 'paper' && computerSelection == 'paper') {
            document.getElementById("userChoiceImage").src = "images/paper.png";
            document.getElementById("computerChoiceImage").src = "images/paper.png";
        } else if (userSelection == 'paper' && computerSelection == 'scissors') {
            document.getElementById("userChoiceImage").src = "images/paper.png";
            document.getElementById("computerChoiceImage").src = "images/scissors.png";
            computerScore += 1;
            computerScoreHTML.innerHTML = computerScore;
        } else if (userSelection == 'paper' && computerSelection == 'rock') {
            document.getElementById("userChoiceImage").src = "images/paper.png";
            document.getElementById("computerChoiceImage").src = "images/rock.png";
            userScore += 1;
            userScoreHTML.innerHTML = userScore;
        }

        // if user chooses scissors

        if (userSelection == 'scissors' && computerSelection == 'scissors') {
            document.getElementById("userChoiceImage").src = "images/scissors.png";
            document.getElementById("computerChoiceImage").src = "images/scissors.png";
        } else if (userSelection == 'scissors' && computerSelection == 'paper') {
            document.getElementById("userChoiceImage").src = "images/scissors.png";
            document.getElementById("computerChoiceImage").src = "images/paper.png";
            userScore += 1;
            userScoreHTML.innerHTML = userScore;
        } else if (userSelection == 'scissors' && computerSelection == 'rock') {
            document.getElementById("userChoiceImage").src = "images/scissors.png";
            document.getElementById("computerChoiceImage").src = "images/rock.png";
            computerScore += 1;
            computerScoreHTML.innerHTML = computerScore;
        }
    }
};

