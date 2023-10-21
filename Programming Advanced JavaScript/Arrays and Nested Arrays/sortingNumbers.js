function sortingNumbers(arrayOfNumbers) {

    const sortedArray = arrayOfNumbers.sort((a, b) => a - b);
    const length = sortedArray.length / 2;
    const result = [];
    for (let index = 0; index < length; index++) {
        let number = sortedArray.shift();
        result.push(number);
        number = sortedArray.pop();
        result.push(number);
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 50]));