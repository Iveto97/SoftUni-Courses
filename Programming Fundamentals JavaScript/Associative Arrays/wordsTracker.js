                    /* --------- Object --------- */
 /*function wordsTracker(data) {

    let lookingWords = data.shift().split(" ");

    let coincidence = {};

    lookingWords.forEach(element => {
        coincidence[element] = 0;
    });

    for (const word of lookingWords) {
        for (const line of data) {
            if (line === word) {
                coincidence[word] += 1;
            }
        }
    }

    let sortedWords = Object.entries(coincidence).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sortedWords) {
        console.log(`${key} - ${value}`);
    }

} */

                    /* --------- Map --------- */

/*function wordsTracker(data) {

    coincidence = new Map();

    let lookingWords = data.shift().split(" ");

    lookingWords.forEach(element => {
        coincidence.set(element, 0);
    });

    for (const word of lookingWords) {
        for (const line of data) {

            if (line === word) {
                let curQuantity = coincidence.get(word);
                coincidence.set(word, curQuantity + 1);
            }
        }
    }

    let sortedWords = Array.from(coincidence.entries())
        .sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(word => {
        console.log(`${word.join(" - ")}`);
    });

} */

                    /* --------- Set --------- */

function wordsTracker(data) {

    coincidence = new Set();

    let lookingWords = data.shift().split(" ");
    let curQuantity = 0;

    for (const word of lookingWords) {
        for (const line of data) {

            if (line === word) {
               curQuantity++;
            }
        }
        coincidence.add(word);
        coincidence.add(curQuantity);
        curQuantity = 0;
    }

    let sortedWords = Array.from(coincidence.entries()).sort((a, b) => b[1] - a[1]);

        for (let index = 0; index < sortedWords.length; index += 2) {
            
            console.log(`${sortedWords[index]} - ${sortedWords[index + 1]}`);
            
        }

    

}

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']

);