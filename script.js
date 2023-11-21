var roundsPlayed = 3;
function playGame() {
    for (roundsPlayed = 0; roundsPlayed<3;roundsPlayed++) {
        var userChoice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
        var computerChoice = getComputerChoice();
        var result = determineWinner(userChoice, computerChoice);

        // Output
        alert("You chose " + userChoice + ".\nComputer chose " + computerChoice + ".\n" + result);

        if (result === 'You win!') {
            alert("Congratulations! You've won the game!");
            break; // Exit the loop if the user wins
        }
    }    
    alert("Game Over. You've played " + (roundsPlayed +1) + " rounds.");
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

