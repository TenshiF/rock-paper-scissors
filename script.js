function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[(Math.floor(Math.random() * choices.length))]
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase()
    const round = document.createElement('div');
    document.body.appendChild(round);
    if (playerSelection == "rock")
    {
        if (computerSelection == "Rock")
        {
            round.textContent = ("It's a tie!")
            return 0
        }
        if (computerSelection == "Paper")
        {
            round.textContent = ("Paper beats Rock! You lose!")
            return -1
        }
        round.textContent = ("Rock beats Scissors! You win!")
        return 1
    }
    if (playerSelection == "paper")
    {
        if (computerSelection == "Paper")
        {
            round.textContent = ("It's a tie!")
            return 0
        }
        if (computerSelection == "Rock")
        {
            round.textContent = ("Paper beats Rock! You win!")
            return 1
        }
        round.textContent = ("Scissors beats Paper! You lose!")
        return -1
    }
    if (playerSelection == "scissors")
    {
        if (computerSelection == "Scissors")
        {
            round.textContent = ("It's a tie!")
            return 0
        }
        if (computerSelection == "Paper")
        {
            round.textContent = ("Scissors beats Paper! You win!")
            return 1
        }
        round.textContent = ("Rock beats Scissors! You lose!")
        return -1
    }
}

function game() {
    let userWins = 0
    let compWins = 0
    let count = 0;

    const score = document.createElement('div');
    document.body.appendChild(score);
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            round = playRound(button.textContent, getComputerChoice());
            if (round == 1) {userWins++}
            else if (round == -1) {compWins++}
            count ++;
        })
    });

    console.log(userWins);
    console.log(compWins);
    console.log(count);

    if (userWins > compWins) {
        console.log("The score is " + userWins.toString() + " - " + compWins.toString() + ". You win!")
    }
    else if (userWins < compWins) {
        console.log("The score is " + userWins.toString() + " - " + compWins.toString() + ". You lose!")
    }
    else {
        console.log("The score is " + userWins.toString() + " - " + compWins.toString() + ". It's a tie!")
    }
    
    
}

const rButton = document.createElement('button');
rButton.textContent = 'Rock';
document.body.appendChild(rButton);

const pButton = document.createElement('button');
pButton.textContent = 'Paper';
document.body.appendChild(pButton);

const sButton = document.createElement('button');
sButton.textContent = 'Scissors';
document.body.appendChild(sButton);

const div = document.createElement('div');

const buttons = document.querySelectorAll('button');

game();
