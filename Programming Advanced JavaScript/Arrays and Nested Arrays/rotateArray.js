function rotateArray(arrayOfNumbers, rotations) {
    for (let index = 0; index < rotations; index++) {
        const element = arrayOfNumbers.pop();
        arrayOfNumbers.unshift(element);
    }
    return arrayOfNumbers.join(' ');
}

console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));