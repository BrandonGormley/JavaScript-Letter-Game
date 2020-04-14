// Selectors

const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');

// Missed Attempts
let missed = 0;

// Phrase Array
const phrases = ['Success is the way of life', 'If you believe it, you can achieve it', 'Do not give up', 'Failure sets up victory', 'Patience will unlock the key to success'];

// Start Game
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Selectors a random Phrase from array
function getRandomPhraseAsArray(arr) {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
}

// Added the Selected Phrase to the display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {

    }
}