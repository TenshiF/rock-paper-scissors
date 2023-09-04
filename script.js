let userWins = 0;
let compWins = 0;

function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[(Math.floor(Math.random() * choices.length))]
}

function playRound(playerSelection, computerSelection)
{
    console.log(playerSelection);
    console.log(computerSelection);
    const round = document.createElement('div');
    document.body.appendChild(round);
    if (playerSelection == "Rock")
    {
        if (computerSelection == "Rock")
        {
            round.textContent = ("It's a tie!")
            return 0
        }
        if (computerSelection == "Paper")
        {
            compWins++;
            round.textContent = ("Paper beats Rock! You lose!")
            return -1
        }
        userWins++;
        round.textContent = ("Rock beats Scissors! You win!")
        return 1
    }
    if (playerSelection == "Paper")
    {
        if (computerSelection == "Paper")
        {
            round.textContent = ("It's a tie!")
            return 0
        }
        if (computerSelection == "Rock")
        {
            userWins++;
            round.textContent = ("Paper beats Rock! You win!")
            return 1
        }
        compWins++;
        round.textContent = ("Scissors beats Paper! You lose!")
        return -1
    }
    if (playerSelection == "Scissors")
    {
        if (computerSelection == "Scissors")
        {
            round.textContent = ("It's a tie!")
            return 0
        }
        if (computerSelection == "Paper")
        {
            userWins++;
            round.textContent = ("Scissors beats Paper! You win!")
            return 1
        }
        compWins++;
        round.textContent = ("Rock beats Scissors! You lose!")
        return -1
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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        x = playRound(button.textContent, getComputerChoice());
        const scoreUpdate = document.createElement('div');
        scoreUpdate.textContent = `The score is now ${userWins} to ${compWins}`;
        document.body.appendChild(scoreUpdate);
        if (userWins == 5) {
            const winner = document.createElement('div');
            winner.textContent = "YOU WIN!";
            document.body.appendChild(winner);
            return;
        }
        else if (compWins == 5) {
            const winner = document.createElement('div');
            winner.textContent = "THE COMPUTER WINS!"
            document.body.appendChild(winner);
            return;
        }

    })
    
})

