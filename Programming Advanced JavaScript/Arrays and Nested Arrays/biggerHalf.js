function biggerHalf(array) {

    const sortedArray = array.sort((a, b) => a - b);
    const length = Math.floor(sortedArray.length / 2);
    const newArray = sortedArray.slice(length, sortedArray.length);
    return newArray;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));