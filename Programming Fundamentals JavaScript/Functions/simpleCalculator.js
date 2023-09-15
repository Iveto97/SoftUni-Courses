function simpleCalculator(numOne, numTwo, operator) {

    multiply = (a, b) => a * b;
    divide = (a, b) => a / b;
    add = (a, b) => a + b;
    subtract = (a, b) => a - b;

    switch (operator) {
        case "multiply": return multiply(numOne, numTwo);
        case "divide": return divide(numOne, numTwo);
        case "add": return add(numOne, numTwo);
        case "subtract": return subtract(numOne, numTwo);
    }
}

console.log(simpleCalculator(5,5,'multiply'));
