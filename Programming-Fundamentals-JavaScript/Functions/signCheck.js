function signCheck(numOne, numTwo, numThree) {
    let count;
    count = 0;
    if (numOne < 0) {
        count++;
    }
    if (numTwo < 0) {
        count++;
    }
    if (numThree < 0) {
        count++;
    }
    if (count % 2 === 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(signCheck(-1,
    -2,
    -3
    ));