function stringSubstring(word, text) {
    let textArr = text.toLowerCase().split(' ');

    for (const wordOfText of textArr) {

        if (wordOfText === word) {
            console.log(wordOfText);
            break;
        }
    }
    if (!textArr.includes(word)) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'is the best programming language'
);