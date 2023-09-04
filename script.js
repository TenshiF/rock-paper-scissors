let userWins = 0;
let compWins = 0;

const scoreBoard = document.createElement('div');
const scoreCards = document.createElement('div');
scoreCards.textContent = `${userWins} - ${compWins}`;
const names = document.createElement('div');
names.textContent = 'You - Computer';
scoreBoard.appendChild(scoreCards);
scoreBoard.appendChild(names);
document.body.appendChild(scoreBoard);

const rButton = document.createElement('button');
rButton.textContent = 'Rock';
document.body.appendChild(rButton);
rButton.addEventListener('click', function () {
    playRound(rButton.textContent, getComputerChoice());
});

const pButton = document.createElement('button');
pButton.textContent = 'Paper';
document.body.appendChild(pButton);
pButton.addEventListener('click', function() {
    playRound(pButton.textContent, getComputerChoice());
});

const sButton = document.createElement('button');
sButton.textContent = 'Scissors';
document.body.appendChild(sButton);
sButton.addEventListener('click', function() {
    playRound(sButton.textContent, getComputerChoice());
});

function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[(Math.floor(Math.random() * choices.length))]
}

function playRound(playerSelection, computerSelection) {
    const round = document.createElement('div');
    document.body.appendChild(round);
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            round.textContent = ("It's a tie!");
        }
        else if (computerSelection == "Paper") {
            compWins++;
            round.textContent = ("Paper beats Rock! You lose!");
        }
        else {
            console.log('User Win');
            userWins++;
            round.textContent = ("Rock beats Scissors! You win!");
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            round.textContent = ("It's a tie!");
        }
        else if (computerSelection == "Rock") {
            userWins++;
            console.log('User Win');
            round.textContent = ("Paper beats Rock! You win!");
        }
        else {
            compWins++;
            round.textContent = ("Scissors beats Paper! You lose!");
        } 
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Scissors") {
            round.textContent = ("It's a tie!");
        }
        else if (computerSelection == "Paper") {
            userWins++;
            console.log('User Win');
            round.textContent = ("Scissors beats Paper! You win!");
        }
        else {
            compWins++;
            round.textContent = ("Rock beats Scissors! You lose!");
        }
    }
    updateScore();
    if (userWins == 5) {
        console.log('YOU WIN, THE BUTTONS SHOULD STOP WORKING NOW!')
        const winner = document.createElement('div');
        winner.textContent = "YOU WIN!";
        document.body.appendChild(winner);
        rButton.disabled = true;
        pButton.disabled = true;
        sButton.disabled = true;
    }
    else if (compWins == 5) {
        console.log('THE COMPUTER WINS, THE BUTTONS SHOULD STOP WORKING NOW!');
        const winner = document.createElement('div');
        winner.textContent = "THE COMPUTER WINS!"
        document.body.appendChild(winner);
        rButton.disabled = true;
        pButton.disabled = true;
        sButton.disabled = true;
    }
}

const div = document.createElement('div');

const buttons = document.querySelectorAll('button');

function updateScore () {
    scoreCards.textContent = `${userWins} - ${compWins}`;
}
