function replaceRepeatingChars(text) {
    let letters = text[0];
    let char = '';
    for (let index = 1; index < text.length; index++) {
        char = text[index];

        if (char !== text[index - 1]) {
            letters += char;
        }
    }
    console.log(letters);
}

replaceRepeatingChars('qqqwerqwecccwd');