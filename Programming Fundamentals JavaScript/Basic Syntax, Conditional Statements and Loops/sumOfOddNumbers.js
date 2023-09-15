function sumOfOddNumbers(n) {
    let sum, i, countOdd;
    i = 1;
    countOdd = 0;
    sum = 0;

    while (countOdd < n) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            countOdd++;
        }
        i++;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5)
sumOfOddNumbers(3)