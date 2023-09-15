function division(number) {
    let biggerDivision;
    biggerDivision = 0;
    if (number % 2 === 0) {
        biggerDivision = 2;
    }
    if (number % 3 === 0) {
        biggerDivision = 3;
    }
    if (number % 6 === 0) {
        biggerDivision = 6;
    }
    if (number % 7 === 0) {
        biggerDivision = 7;
    }
    if (number % 10 === 0) {
        biggerDivision = 10;
    }

    if (biggerDivision == 0) {
        console.log(`Not divisible`);
    } else {
        console.log(`The number is divisible by ${biggerDivision}`);
    }
}

division(1643)