function printElementFromAnArray(array, step) {
    const newArray = [];

    for (let index = 0; index < array.length; index += step) {
        newArray.push(array[index]);
    }
    return newArray;
}

console.log(printElementFromAnArray(['1', '2', '3', '4', '5'], 6));