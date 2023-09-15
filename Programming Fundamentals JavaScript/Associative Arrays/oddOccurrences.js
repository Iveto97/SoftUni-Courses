                    /* --------- Object --------- */

/* function oddOccurrences(data) {

    let wordString = data.split(' ').map(e => e.toLowerCase());

    let repeatWords = {};

    for (const word of wordString) {

        if (!repeatWords.hasOwnProperty(word)) {
            repeatWords[word] = 0;
        }

        repeatWords[word] += 1;
    }

    let sortWords = Object.entries(repeatWords).filter(pairs => pairs[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1]);

    let result = '';

    for (const [word, numb] of sortWords) {
        result += `${word} `;
    }
    console.log(`${result}`);
} */

                    /* --------- Map --------- */

function oddOccurrences(data) {

    let wordString = data.split(' ').map(e => e.toLowerCase());

    let repeatWords = new Map();

    for (const word of wordString) {

        if (!repeatWords.has(word)) {
            repeatWords.set(word, 0);
        }
        let quantity = repeatWords.get(word);
        repeatWords.set(word, quantity + 1);
    }

    let sortWords = Array.from(repeatWords.entries()).filter(pairs => pairs[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1]);

    let result = '';

    for (const [word, numb] of sortWords) {
        result += `${word} `;
    }
    console.log(`${result}`);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');