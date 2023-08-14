function sumEvenNumbers(arrayOfStrings) {
    let i, numb, sum;
    sum = 0;
    for (i = 0; i < arrayOfStrings.length; i++) {
        numb = parseInt(arrayOfStrings[i]);
        numb % 2 === 0 ? sum += numb : sum += 0;
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])
console.log("------------------");
sumEvenNumbers(['3','5','7','9'])
console.log("------------------");
sumEvenNumbers(['2','4','6','8','10'])