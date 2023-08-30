function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[(Math.floor(Math.random() * choices.length))]
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock")
    {
        if (computerSelection == "Rock")
        {
            console.log("It's a tie!")
            return 0
        }
        if (computerSelection == "Paper")
        {
            console.log("Paper beats Rock! You lose!")
            return -1
        }
        console.log("Rock beats Scissors! You win!")
        return 1
    }
    if (playerSelection == "paper")
    {
        if (computerSelection == "Paper")
        {
            console.log("It's a tie!")
            return 0
        }
        if (computerSelection == "Rock")
        {
            console.log("Paper beats Rock! You win!")
            return 1
        }
        console.log("Scissors beats Paper! You lose!")
        return -1
    }
    if (playerSelection == "scissors")
    {
        if (computerSelection == "Scissors")
        {
            console.log("It's a tie!")
            return 0
        }
        if (computerSelection == "Paper")
        {
            console.log("Scissors beats Paper! You win!")
            return 1
        }
        console.log("Rock beats Scissors! You lose!")
        return -1
    }
}

function game()
{
    let userWins = 0
    let compWins = 0
    for (let i = 0; i < 5 ; i++)
    {
        round = playRound(prompt(),getComputerChoice())
        if (round == 1) {userWins++}
        else if (round == -1) {compWins++}
    }
    if (userWins > compWins)
    {
        console.log("The score is " + userWins.toString() + " - " + compWins.toString() + ". You win!")
    }
    else if (userWins < compWins)
    {
        console.log("The score is " + userWins.toString() + " - " + compWins.toString() + ". You lose!")
    }
    else
    {
        console.log("The score is " + userWins.toString() + " - " + compWins.toString() + ". It's a tie!")
    }
}

game()
