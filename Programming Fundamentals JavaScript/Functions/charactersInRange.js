function charactersInRange(firstCharacter, secondCharacter) {
    let firstAscii, secondAscii;
    firstAscii = firstCharacter.charCodeAt();
    secondAscii = secondCharacter.charCodeAt();

    asciiToChar(firstAscii, secondAscii);

    function asciiToChar(first, second) {
        let i, char;
        char = "";
        if (first < second) {
            for (i = first + 1; i < second; i++) {
                char += `${String.fromCharCode(i)} `;
            }
        } else if (second < first) {
            for (i = second + 1; i < first; i++) {
                char += `${String.fromCharCode(i)} `;
            }
        }
        console.log(char);
    }
}

charactersInRange('a','d');
console.log("-------------------");
charactersInRange('#',':');
console.log("-------------------");
charactersInRange('C','#');