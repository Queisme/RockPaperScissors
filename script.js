let computerScore = 0;
let humanScore = 0;
let computerChoice = '';
let humanChoice = '';
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer picks: ${computerChoice}`);
};

const getHumanChoice = () => {
  humanChoice = prompt('Pick rock, paper, or scissors: '.toLowerCase());
  console.log(`You picked: ${humanChoice}`);
  getComputerChoice();
  compare();
};

const compare = () => {
  if (humanChoice === computerChoice) {
    console.log('Tie.');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('You win.');
    humanScore += 1;
  } else {
    console.log('You Lose.');
    computerScore += 1;
  }
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's Score: ${computerScore}`);
};

const playRound = () => {
  humanScore > computerScore ? 'Winner! Winner!' : 'Loser! Loser';
};

getHumanChoice();
