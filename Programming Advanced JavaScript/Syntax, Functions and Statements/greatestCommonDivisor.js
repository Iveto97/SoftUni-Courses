function greatestCommonDivisor(a, b) {

    if (a > b) {
        while (b !== 0) {
            let rest = a % b;
            a = b;
            b = rest;
        }
        return a;
    } else {
        while (a !== 0) {
            let rest = b % a;
            b = a;
            a = rest;
        }
        return b;
    }
}

console.log(greatestCommonDivisor(5, 15));
console.log(greatestCommonDivisor(2154, 458));