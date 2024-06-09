function analyzeText() {
    const text = document.getElementById('textInput').value;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const readingTime = calculateReadingTime(wordCount);

    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('readingTime').textContent = readingTime;
}

function calculateReadingTime(wordCount) {
    const wordsPerMinute = 200;
    const time = Math.ceil(wordCount / wordsPerMinute);
    return time;
}
