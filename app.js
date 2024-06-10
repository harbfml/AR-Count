function analyzeText() {
    const text = document.getElementById('textInput').value;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const readingTime = calculateReadingTime(wordCount);

    animateCounter(document.getElementById('wordCount'), wordCount);
    animateCounter(document.getElementById('readingTime'), readingTime);
}

function calculateReadingTime(wordCount) {
    const wordsPerMinute = 200;
    const time = Math.ceil(wordCount / wordsPerMinute);
    return time;
}

function animateCounter(element, targetValue) {
    let currentValue = 0;
    const increment = targetValue > 100 ? Math.ceil(targetValue / 100) : 1;
    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        element.textContent = currentValue;
    }, 10);
}
