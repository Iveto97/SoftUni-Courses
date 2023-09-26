function processOddPositions(arrayOfNumber) {
    const oddNumbers = [];

    for (let index = 1; index < arrayOfNumber.length; index += 2) {
        oddNumbers.push(arrayOfNumber[index] * 2);
    }
    const reversedArr = oddNumbers.reverse();
    return reversedArr;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));