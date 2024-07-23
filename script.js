const sentences = [
    { sentence: "¿Cómo estás?", language: "Spanish" },
    { sentence: "Wie geht es dir?", language: "German" },
    { sentence: "こんにちは", language: "Japanese" },
    { sentence: "आप कैसे हैं?", language: "Hindi" },
    { sentence: "Comment ça va?", language: "French" },
    { sentence: "你好吗？", language: "Chinese" },
    { sentence: "Как дела?", language: "Russian" },
    { sentence: "Come stai?", language: "Italian" },
    { sentence: "안녕하세요", language: "Korean" },
    { sentence: "Ola, como vai?", language: "Portuguese" },
    { sentence: "Kumusta ka?", language: "Tagalog" },
    { sentence: "Apa kabar?", language: "Indonesian" },
    { sentence: "Guten Tag", language: "German" },
    { sentence: "Bonjour", language: "French" },
    { sentence: "Ciao", language: "Italian" },
    { sentence: "Olá", language: "Portuguese" },
    { sentence: "Hallo", language: "Dutch" },
    { sentence: "Hej", language: "Swedish" },
    { sentence: "Hei", language: "Norwegian" },
    { sentence: "Merhaba", language: "Turkish" },
    { sentence: "مرحبا", language: "Arabic" },
    { sentence: "שָׁלוֹם", language: "Hebrew" },
    { sentence: "Γειά σας", language: "Greek" },
    { sentence: "สวัสดี", language: "Thai" },
    { sentence: "سلام", language: "Persian" },
    { sentence: "Halo", language: "Malay" },
    { sentence: "Привет", language: "Ukrainian" },
    { sentence: "Բարեւ Ձեզ", language: "Armenian" },
    { sentence: "Molo", language: "Xhosa" },
    { sentence: "Sawubona", language: "Zulu" }
];

const languageOptions = [
    "Spanish", "German", "Japanese", "Hindi", "French", "Chinese", "Russian", 
    "Italian", "Korean", "Portuguese", "Tagalog", "Indonesian", "Dutch", 
    "Swedish", "Norwegian", "Turkish", "Arabic", "Hebrew", "Greek", "Thai",
    "Persian", "Malay", "Ukrainian", "Armenian", "Xhosa", "Zulu"
];

let currentSentenceIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const sentenceElement = document.getElementById('sentence');
    const languageSelect = document.getElementById('language-select');
    const submitBtn = document.getElementById('submit-btn');
    const resultElement = document.getElementById('result');
    const nextBtn = document.getElementById('next-btn');

    languageOptions.forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        languageSelect.appendChild(option);
    });

    function displaySentence() {
        sentenceElement.textContent = sentences[currentSentenceIndex].sentence;
        languageSelect.value = '';
        resultElement.textContent = '';
        nextBtn.style.display = 'none';
    }

    function checkAnswer() {
        const selectedLanguage = languageSelect.value;
        if (selectedLanguage === sentences[currentSentenceIndex].language) {
            resultElement.textContent = 'Correct!';
            score++;
        } else {
            resultElement.textContent = `Incorrect! The correct answer is ${sentences[currentSentenceIndex].language}`;
        }
        nextBtn.style.display = 'block';
    }

    function nextSentence() {
        currentSentenceIndex++;
        if (currentSentenceIndex < sentences.length) {
            displaySentence();
        } else {
            sentenceElement.textContent = `Game over! Your score is ${score} out of ${sentences.length}`;
            languageSelect.style.display = 'none';
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }

    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextSentence);

    displaySentence();
});
