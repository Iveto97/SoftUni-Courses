function wordOccurrences(data) {

    let words, sort;
    words = {};
    for (const word of data) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }

    sort = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [key, number] of sort) {
        console.log(`${key} -> ${number} times`);
    }
}

wordOccurrences(["dog", "bye", "city", "dog", "dad",
    "boys", "ginger"]

)