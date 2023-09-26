function biggestElement(matrix) {
    let biggestNumber = matrix[0][0];
    for (const row of matrix) {
        for (const number of row) {
            if (number > biggestNumber) {
                biggestNumber = number;
            }
        }
    }
    return biggestNumber;
}

console.log(biggestElement([[-3, -5, -7, -12], [-1, -4, -33, -2]]));