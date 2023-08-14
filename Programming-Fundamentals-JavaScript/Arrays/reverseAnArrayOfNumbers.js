function reverseAnArrayOfNumbers(n, arrayOfElements) {
    let newArr, i;
    newArr = [];

    for (i = n; i > 0; i--) {
        newArr.push(arrayOfElements[i - 1]);
    }
    console.log(newArr.join(" "))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
console.log("------------------");
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5] )
console.log("------------------");
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])