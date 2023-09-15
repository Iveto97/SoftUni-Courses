function smallestTwoNumbers(arrayOfNumbers) {
    let i, firstNum, secondNum, result, countRes,  smallestElArr;
    countRes = 0;
    smallestElArr = [];
    firstNum = 0;
   

    while(smallestElArr.length < 2) {
        
    for (i = 0; i < arrayOfNumbers.length; i++) {
       
        countRes = 0;
        firstNum = arrayOfNumbers[i];
        for (a = 0; a < arrayOfNumbers.length; a++) {
            secondNum = arrayOfNumbers[a];
            result = compareFn(firstNum, secondNum);
            if (result === -1) {
                countRes++;
            }
        }
        if (countRes === arrayOfNumbers.length - 1) {
            smallestElArr.push(arrayOfNumbers[i]);
            arrayOfNumbers.splice(i, 1);
        }
    }
}
    return smallestElArr;


    function compareFn(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        if(a === b) {
        return 0;
        }
    }
}

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));