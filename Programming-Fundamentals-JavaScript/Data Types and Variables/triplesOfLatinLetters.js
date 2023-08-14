function triplesOfLatinLetters(n) {
    let firstLetter, secondLetter, thirdLetter, i, o, e;
    letter = " ";
    for (i = 0; i < n; i++) {
        firstLetter = String.fromCharCode(97 + i);
        for (o = 0; o < n; o++) {
            secondLetter = String.fromCharCode(97 + o);
            for (e = 0; e < n; e++) {
                thirdLetter = String.fromCharCode(97 + e);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }

    }
}

triplesOfLatinLetters(3)