function revealWords(words, text) {

    let wordsArr = words.split(', ');
    let textArr = text.split(' ');
    for (const word of wordsArr) {
        let template = '*'.repeat(word.length);
        for (let textWord of textArr) {
            if (template === textWord) {
                let index = textArr.indexOf(textWord);
                textArr.splice(index, 1, word);
            }
        }
    }
    console.log(textArr.join(' '));
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');