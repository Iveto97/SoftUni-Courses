function mathPower(x, y) {
    let result, i;
    result = 1;
    for (i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(mathPower(2,8));