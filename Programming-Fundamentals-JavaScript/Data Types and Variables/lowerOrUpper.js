function lowerOrUpper(character) {
    let upperCase, lowerCase;
    upperCase = character.toUpperCase();
    lowerCase = character.toLowerCase();

    if (character === upperCase) {
        console.log("upper-case");
    } else if (character === lowerCase) {
        console.log("lower-case");
    }
}

lowerOrUpper('L')
lowerOrUpper('f')