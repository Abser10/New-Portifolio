document.addEventListener("DOMContentLoaded", () => {
    const words = [
    "HTML ",
    "CSS " ,
    "React ",
    "Redux ",
    "Tailwind ",
    "Testing ",
    "TypeScript ",
    ];
    // الكلمات اللي باش نكتبهم في الtypewriter
    const typeSpan = document.querySelector(".typewriter-text");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typeSpan.textContent = currentWord.substring(0, charIndex--);
    } else {
        typeSpan.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 70;
      setTimeout(type, 1000); // انتظر شوية قبل ما يبدأ يمسح
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 150;
    }

    setTimeout(type, typingSpeed);
    }

type();
});


  const phrases = [
  "Front-End Developer ",
"React Developer ",
"JavaScript Engineer ",
"Web Developer "
];

const el = document.getElementById("typewriter");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  if (phraseIndex >= phrases.length) phraseIndex = 0;

  currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    el.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    el.textContent = currentPhrase.substring(0, letterIndex++);
  }

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 40 : 100);
  }
}

// Start typing on page load
type();
// Add a click event listener to the button
const button = document.getElementById("clickButton");