function integerAndFloat(a, b, c) {
    let sum;
    sum = a + b + c;
    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`);
}

integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)