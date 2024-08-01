let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
const totalRounds = 5;

const tie = `It's a tie! Try again.`;
const winner = `Winner Winner! Chicken Dinner!`;
const loser = 'You Lost. Shame. Shame. Shame.';
const theChoices = ['scissors', 'paper', 'rock'];

const header1 = document.querySelector('h1');
const main = document.querySelector('main');

// thepicks
const thepicks = document.createElement('div');
main.appendChild(thepicks);
thepicks.classList.add('thepicks');

// rock
const rockButton = document.createElement('button');
thepicks.appendChild(rockButton);
rockButton.classList.add('rock');
rockButton.textContent = 'Rock';

// paper
const paperButton = document.createElement('button');
thepicks.appendChild(paperButton);
paperButton.classList.add('paper');
paperButton.textContent = 'Paper';

// scissors
const scissorsButton = document.createElement('button');
thepicks.appendChild(scissorsButton);
scissorsButton.classList.add('scissors');
scissorsButton.textContent = 'Scissors';

// game info
const gameinfo = document.createElement('div');
main.appendChild(gameinfo);
gameinfo.classList.add('game-info');

// game info // rounds
const rounds = document.createElement('div');
gameinfo.appendChild(rounds);
rounds.classList.add('rounds');

// game info // computerScoreboard
const computerScoreboard = document.createElement('div');
gameinfo.appendChild(computerScoreboard);
computerScoreboard.classList.add('computerScoreboard');

//computerscore
const computerscore = document.createElement('div');
computerScoreboard.appendChild(computerscore);
computerscore.classList.add('computerscore');

// game info //playerScoreboard
const playerScoreboard = document.createElement('div');
gameinfo.appendChild(playerScoreboard);
playerScoreboard.classList.add('playerScoreboard');

//playerscore
const playerscore = document.createElement('div');
playerScoreboard.appendChild(playerscore);
playerscore.classList.add('playerscore');

// game info // playerPicks
const playerPicks = document.createElement('div');
gameinfo.appendChild(playerPicks);
playerPicks.classList.add('playerPicks');

//game info // computerPicks
const computerPicks = document.createElement('div');
gameinfo.appendChild(computerPicks);
computerPicks.classList.add('computerPicks');
const playerpick = document.createElement('div');

// result
const result = document.createElement('div');
main.appendChild(result);
result.classList.add('result');

// reload
const reloadButton = document.createElement('button');
main.appendChild(reloadButton);
reloadButton.classList.add('reload');
reloadButton.textContent = 'Reload';
reloadButton.addEventListener('click', restart);

if (rounds === totalRounds) {
  theEnd();
}

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {
  //play rounds
  let theChoices = ['scissors', 'rock', 'paper'];
  let computerSelection =
    theChoices[Math.floor(Math.random() * theChoices.length)];

  playerPicks.textContent = `Player's Pick: ${
    playerSelection[0].toUpperCase() + playerSelection.slice(1)
  }`;
  computerPicks.textContent = `Computer's Pick: ${
    computerSelection[0].toUpperCase() + computerSelection.slice(1)
  }`;

  if (playerSelection === computerSelection) {
    result.textContent = `${tie}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result.textContent = `${winner}`;
    playerScore += 1;
    currentRound += 1;
  } else {
    result.textContent = `${loser}`;
    computerScore += 1;
    currentRound += 1;
  }

  playerScoreboard.textContent = `Player Score: ${playerScore}`;
  computerScoreboard.textContent = `Computer Score: ${computerScore}`;

  rounds.textContent = `Round: ${currentRound} of ${totalRounds}`;
  if (playerScore + computerScore === 5) {
    theEnd(playerScore, computerScore);
  }

  function theEnd(playerScore, computerScore) {
    if (playerScore > computerScore) {
      result.textContent = `Congratulations! You have the big brain.`;
    } else {
      result.textContent = `Well, well, well. Looks like there's a loser here. And I'm not talking about me.`;
    }
  }
}

function restart() {
  window.location.reload();
}
