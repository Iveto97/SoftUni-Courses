function processOddNumber(arrElements) {
    let i, newElement, newArr, reversedArr;
    newElement = 0;
    newArr = [];
    reversedArr = [];

    for (i = 0; i < arrElements.length; i++) {

        if (i % 2 !== 0) {
            newElement = arrElements[i] * 2;
            newArr.push(newElement);
        }

    }
    reversedArr = newArr.reverse();
    return reversedArr.join(" ");
}

console.log(processOddNumber([3, 0, 10, 4, 7, 3]));