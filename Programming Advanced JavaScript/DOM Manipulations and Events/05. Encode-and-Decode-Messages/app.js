function encodeAndDecodeMessages() {
    const messageForEncode = document.getElementById('main').children[0];
    const encodedMessage = document.getElementById('main').children[1];

    const encodeButton = messageForEncode.getElementsByTagName('button')[0];
    const decodeButton = encodedMessage.getElementsByTagName('button')[0];

    const encodeTextArea = messageForEncode.getElementsByTagName('textarea')[0];
    const decodeTextArea = encodedMessage.getElementsByTagName('textarea')[0];

    encodeButton.addEventListener('click', encodeFunction);
    decodeButton.addEventListener('click', decodeFunction);

    function encodeFunction() {
        let text = encodeTextArea.value;
        let finalText = '';

        for (const char of text) {
            let charToAscii = char.charCodeAt();
            charToAscii += 1;
            let newChar = String.fromCharCode(charToAscii);
            finalText += newChar;
        }
        decodeTextArea.value = finalText;
        encodeTextArea.value = '';
    }

    function decodeFunction() {
        let textForDec = decodeTextArea.value;
        let encodedText = '';

        for (const char of textForDec) {
            let charAscii = char.charCodeAt();
            charAscii -= 1;
            let newChar = String.fromCharCode(charAscii);
            encodedText += newChar;
        }
        decodeTextArea.value = encodedText;
    }
}