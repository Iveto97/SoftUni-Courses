function sortArray(numericArray, string) {
    return string === 'asc' ? numericArray.sort((a, b) => a - b) : numericArray.sort((a, b) => b - a);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));