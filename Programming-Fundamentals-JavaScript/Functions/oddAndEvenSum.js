function oddAndEvenSum(number) {
    let separatedArr;
    separatedArr = Array.from(String(number), Number);

    sumEvenOddNum(separatedArr);

    function sumEvenOddNum(arr) {
        let i, evenSum, oddSum;
        evenSum = 0;
        oddSum = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenSum += arr[i];
            } else {
                oddSum += arr[i];
            }
        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}

oddAndEvenSum(1000435);
console.log("-------------------");
oddAndEvenSum(3495892137259234);