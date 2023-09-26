function smallestTwoNumbers(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const smallestNumber = [];
    for (let index = 0; index < 2; index++) {
        smallestNumber.push(sortedArray[index]);
    }
    console.log(smallestNumber.join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);