// Selectors

const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const tries = document.querySelectorAll('.tries');

// Missed Attempts
let missed = 0;

// Phrase Array
const phrases = ['success is the way of life', 'if you believe it you can achieve it', 'do not give up', 'failure sets up victory', 'patience will unlock the key to success'];

// Start Game
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Selectors a random Phrase from array
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    const randomPhraseSplit = randomPhrase.split('');
    return randomPhraseSplit;
}

// Added the Selected Phrase to the display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ul = phrase.querySelector('ul');
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = arr[i];
        if (arr[i] === ' ') {
            li.classList.add('space');
        } else {
            li.classList.add('letter');
        }
    }
}
getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Check Letter Function
function checkLetter(button) {
    const letters = document.querySelectorAll('.letter');
    let match = false;
    for (let i = 0; i < letters.length; i++) {
        if (button.textContent === letters[i].textContent) {
            letters[i].classList.add('show');
            match = true;
        }
    }
    return match;
}

// Event Listener for Screen Keyboard Press
qwerty.addEventListener('click', (e) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.add('chosen');
        event.target.setAttribute('disabled', '');
    }
    let letterFound = checkLetter(e.target);
    if (!letterFound && event.target.tagName === 'BUTTON') {
        tries[missed].style.display = 'none';
        missed += 1;
    }
    checkWin();
});

// Check Win Function
function checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');

    if (letter.length === show.length) {
        overlay.classList.add('win');
        const title = document.querySelector('.title');
        title.textContent = 'You won!!!';
        overlay.style.display = 'flex';
        startButton.style.display = 'none';

    }

    if (missed > 4) {
        overlay.classList.add('lose');
        const title = document.querySelector('.title');
        title.textContent = 'You Lose...';
        overlay.style.display = 'flex';
        startButton.style.display = 'none';
    }
}