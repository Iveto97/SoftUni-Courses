function ExtractIncreasingSubsequenceFromArray(arrayOfNumbers) {
   /* let currentBiggerNumber = 0;
    const biggerNumArr = [];

    for (const number of arrayOfNumbers) {
        if (currentBiggerNumber <= number) {
            currentBiggerNumber = number;
            biggerNumArr.push(currentBiggerNumber);
        }
    }
    return biggerNumArr;*/

    const num = arrayOfNumbers.reduce((a, b) => {
        if (a.length) {
            if(a[a.length - 1] < b) {
                a.push(b);
            }
        } else {
            a.push(b);
        }
        return a;
    }, []);
    return num;
}

console.log(ExtractIncreasingSubsequenceFromArray([1, 2, 3, 4]));