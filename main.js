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