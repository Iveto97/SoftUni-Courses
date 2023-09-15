function cutAndReverse(text) {

    let middle = text.length / 2;
    let firstText = '';
    let secondText = '';
    for (let index = middle - 1; index >= 0; index--) {
        firstText += text[index];
    }

    for (let i = text.length - 1; i >= middle; i--) {
        secondText += text[i];
    }
    console.log(firstText);
    console.log(secondText);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');