function SumFirstAndLastElements(arrayOfNumbers) {
    let first, last, sum;
    last = arrayOfNumbers[arrayOfNumbers.length - 1];
    first = arrayOfNumbers[0];
    sum = first + last;
    console.log(sum);
}

SumFirstAndLastElements([20, 30, 40])
console.log("------------------");
SumFirstAndLastElements([10, 17, 22, 33])
console.log("------------------");
SumFirstAndLastElements([11, 58, 69])
