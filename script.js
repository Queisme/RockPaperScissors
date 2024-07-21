let playerPick = '';
let computerPick = '';
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  computerPick = choices[Math.floor(Math.random() * choices.length)];
};

const compare = () => {
  if (playerPick === computerPick) {
    console.log('Tie.');
  } else if (
    (playerPick === 'rock' && computerPick === 'scissors') ||
    (playerPick === 'paper' && computerPick === 'rock') ||
    (playerPick === 'scissors' && computerPick === 'paper')
  ) {
    console.log('You win.');
  } else {
    console.log('You Lose.');
  }
};
