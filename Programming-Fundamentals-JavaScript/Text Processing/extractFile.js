function extractFile(text) {
    let index = text.lastIndexOf('\\');
    let point = text.lastIndexOf('.');
    let fileName = text.substring(index + 1, point);
    let extension = text.substring(point + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-.internal\\Template.pptx');