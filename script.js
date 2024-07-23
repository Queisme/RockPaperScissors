let computerScore = '';
let playerScore = '';
let computerPick = '';
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  computerPick = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer picks: ${computerPick}`);
};

const getHumanChoice = prompt(
  'Pick rock, paper, or scissors: '.toLowerCase(),
  getComputerChoice()
);
console.log(`You chose: ${getHumanChoice}`);

const compare = () => {
  if (getHumanChoice === computerPick) {
    console.log('Tie.');
  } else if (
    (getHumanChoice === 'rock' && computerPick === 'scissors') ||
    (getHumanChoice === 'paper' && computerPick === 'rock') ||
    (getHumanChoice === 'scissors' && computerPick === 'paper')
  ) {
    console.log('You win.');
  } else {
    console.log('You Lose.');
  }
};

compare();
