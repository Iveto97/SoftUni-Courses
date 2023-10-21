function arrayWithAGivenDelimiter(array, delimiter) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index]);
        if (index < array.length - 1) {
            newArray.push(delimiter);
        }
    }
    return newArray.join('');
}

console.log(arrayWithAGivenDelimiter(['One',

    'Two',

    'Three',

    'Four',

    'Five'],

    '-'));