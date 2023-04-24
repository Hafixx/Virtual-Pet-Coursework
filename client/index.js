const start = Date.now();

let pet = {};
let adjustInterval;

/* This code updates the name of a pet on a web page and stores the new name in local storage for future use. */
function changeName() {
  const petNameInput = document.querySelector('#petName');
  const petNameHeader = document.querySelector('#petid');
  pet.name = petNameInput.value;
  localStorage.setItem('petname', pet.name);
  const storedPetName = localStorage.getItem('petname');
  petNameHeader.textContent = storedPetName;
}

function init() {
  const petIdElem = document.querySelector('#petid');
  const result = localStorage.getItem('petname');
  if (result) { // we already had a name
    petIdElem.textContent = result;
  }
  if (localStorage.getItem('pet') == null) {
    pet.happy = 100;
    pet.hunger = 100;
    pet.clean = 100;
    pet.sleep = 100;
    pet.alive = true;
  } else {
    pet = JSON.parse(localStorage.getItem('pet'));
  }

  const nameButton = document.querySelector('#setName');
  nameButton.addEventListener('click', changeName);
  const closePopupBtn = document.querySelector('#closePopup');
  const popup = document.querySelector('#popup');
  const selectElement = document.querySelector('#game-select');
  selectElement.addEventListener('change', initGame);

  closePopupBtn.onclick = function () {
    popup.style.display = 'none';
  };

  petMeters();


  petButtons();
}
//  Allows the user to select a mini game from a dropdown menu
function initGame(e) {
  if (e.target.value === 'RPS') {
    showGamePopup();
    e.target.value = '';
  } else if (e.target.value === 'Guess') { showGuessPopup(); }
}

function showGamePopup() {
  const popup = document.querySelector('#game-popup');

  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorBtn = document.querySelector('#scissor');

  rockBtn.addEventListener('click', selectChoiceRPS);
  paperBtn.addEventListener('click', selectChoiceRPS);
  scissorBtn.addEventListener('click', selectChoiceRPS);

  // popup.style.display = 'flex'; // DONT DO THIS
  popup.classList.toggle('shown');
}


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function selectChoiceRPS(e) {
  const userChoice = e.target.name;
  const computerChoice = getComputerChoice();
  const result = compareChoices(userChoice, computerChoice);
  displayResult(result);
}

function displayResult(result) {
  const resultDisplay = document.querySelector('#rpsResult');
  resultDisplay.textContent = result;
  // resultDisplay.style.display = 'block';
}


// Function to compare the choices and determine the winner
function compareChoices(player, computer) {
  if (player === computer) {
    return "It's a tie!";
    // eslint-disable-next-line no-mixed-operators
  } else if (player === 'rock' && computer === 'scissor' || player === 'paper' && computer === 'rock' || player === 'scissor' && computer === 'paper') {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function showGuessPopup() {
  const gtnPopup = document.querySelector('.popup21');
  // popup.style.display = 'flex'; // DONT DO THIS
  gtnPopup.classList.toggle('shown');
}
window.onload = function () {
  // generate a random number between 1 and 100
  const number = Math.floor(Math.random() * 100) + 1;

  // keep track of the number of guesses
  let guesses = 0;

  function checkGuess() {
    // get the user's guess from the input field
    const guess = parseInt(document.getElementById('guess').value);

    if (guess === number) {
      // if the user guessed the number, congratulate them
      document.getElementById('guessResult').innerHTML = 'You guessed it! It took you ' + guesses + ' guesses.';
      document.getElementById('guess').setAttribute('disabled', 'disabled');
      document.getElementById('submit-btn').setAttribute('disabled', 'disabled');
    } else if (guess < number) {
      // if the guess is too low, give the user a hint
      document.getElementById('guessResult').innerHTML = 'Too low. Guess again.';
      guesses++;
    } else {
      // if the guess is too high, give the user a hint
      document.getElementById('guessResult').innerHTML = 'Too high. Guess again.';
      guesses++;
    }
  }

  document.getElementById('submit-btn').addEventListener('click', checkGuess);
};
// This function enables the user to interact with the pet by clicking
function petButtons() {
  const playbutton = document.querySelector('#playbutton');
  playbutton.addEventListener('click', playWith);
  const feedbutton = document.querySelector('#feedbutton');
  feedbutton.addEventListener('click', feedPet);
  const cleanbutton = document.querySelector('#cleanbutton');
  cleanbutton.addEventListener('click', cleanPet);
  const sleepbutton = document.querySelector('#sleepbutton');
  sleepbutton.addEventListener('click', sleepPet);
  const refreshButton = document.querySelector('#closePopup');
  refreshButton.addEventListener('click', restart);
  const restartbutton = document.querySelector('#restartbutton');
  restartbutton.addEventListener('click', restart);
}

function petMeters() {
  adjustInterval = setInterval(adjustThings, 10000);
  const happyMet = document.querySelector('#happyMet');
  happyMet.value = pet.happy;
  const hungerMet = document.querySelector('#hungerMet');
  hungerMet.value = pet.hunger;
  const cleanMet = document.querySelector('#cleanMet');
  cleanMet.value = pet.clean;
  const sleepMet = document.querySelector('#sleepMet');
  sleepMet.value = pet.sleep;
}

function adjustThings() {
  if (pet.happy > 0) {
    pet.happy -= 1;
  }
  if (pet.hunger > 0) {
    pet.hunger -= 1;
  }
  if (pet.clean > 0) {
    pet.clean -= 1;
  }
  if (pet.sleep > 0) {
    pet.sleep -= 1;
  }

  if (pet.hunger <= 0 && pet.alive === true) {
    gameOver();
  }

  updateMeters();
  localStorage.setItem('pet', JSON.stringify(pet));
}

function gameOver() {
  pet.alive = false;
  const popup = document.querySelector('#popup');
  // popup.style.display = 'flex'; // DONT DO THIS
  popup.classList.toggle('shown');

  const end = Date.now();
  const alivefor = Math.round((end - start) / 1000);
  const lifelength = document.querySelector('#lifelength');
  lifelength.textContent = 'Pet lived for ' + alivefor + ' seconds';
}

function updateMeters() {
  document.querySelector('#happyMet').value = pet.happy;
  document.querySelector('#hungerMet').value = pet.hunger;
  document.querySelector('#cleanMet').value = pet.clean;
  document.querySelector('#sleepMet').value = pet.sleep;
}

function playWith() {
  pet.happy += 10;

  document.querySelector('#happyMet').value = pet.happy;
}
function feedPet() {
  pet.hunger += 10;
  document.querySelector('#hungerMet').value = pet.hunger;
}
function cleanPet() {
  pet.clean += 10;
  document.querySelector('#cleanMet').value = pet.clean;
}
function sleepPet() {
  pet.sleep += 10;
  document.querySelector('#sleepMet').value = pet.sleep;
}


function restart() {
  clearInterval(adjustInterval);
  localStorage.removeItem('pet');
  localStorage.removeItem('petname');
  window.location.reload();
}
// /// retrieve a reference to the popup element
// const popup = document.getElementById('game-popup');

// retrieve a reference to the close button
const closeButton = document.querySelector('#hideGamePopup');
const guessCloseButton = document.querySelector('#hideGuessPopup');

// add an event listener to the toggle button
closeButton.addEventListener('click', function () {
  // toggle the popup element by changing its display style

  const popup = document.querySelector('#game-popup');
  popup.classList.toggle('shown');
  const selectElement = document.querySelector('#game-select');
  selectElement.value = '';
});
// add an event listener to the toggle button
guessCloseButton.addEventListener('click', function () {
  // toggle the popup element by changing its display style

  const gtnPopup = document.querySelector('.popup21');
  gtnPopup.classList.toggle('shown');
  const selectElement = document.querySelector('#game-select');
  selectElement.value = '';
});


init();
