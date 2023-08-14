function sumDigits(number) {
    let numbToStr, i, sum;
    sum = 0;
    numbToStr = number.toString();
    for (i = 0; i < numbToStr.length; i++) {
        sum += Number(numbToStr[i]);
    }
    console.log(sum);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)