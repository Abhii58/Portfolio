// script.js
const textElement = document.querySelector('.typing-text');
const phrases = ['I am a web developer', 'I am a frontend developer'];
let currentPhraseIndex = 0;
let currentCharIndex = 0;

function typeText() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        textElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (currentCharIndex > 0) {
        textElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(eraseText, 100);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeText, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeText();
});
