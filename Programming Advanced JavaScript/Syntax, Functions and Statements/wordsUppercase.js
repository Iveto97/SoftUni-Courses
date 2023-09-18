function wordsUppercase(data) {
    let pattern = /\w+/gm;
    let result = data.toUpperCase();
    let words;
    let wordsToUpperCase = [];

    while (( words = pattern.exec(result)) !== null) {
        wordsToUpperCase.push(words[0]);
    }
    console.log(wordsToUpperCase.join(', '));
}

wordsUppercase('Hi, how are you?');