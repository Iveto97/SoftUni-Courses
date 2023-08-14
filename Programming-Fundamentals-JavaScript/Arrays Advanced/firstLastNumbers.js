function firstLastNumbers(arrOfNum) {
    let firstNum, lastNum, k;
    k = (arrOfNum[0]);
    firstNum = [];
    lastNum = [];
    firstNum = arrOfNum.slice(1, k + 1);
    lastNum = arrOfNum.slice(arrOfNum.length - k);
    console.log(firstNum.join(" "));
    console.log(lastNum.join(" "));
}

    firstLastNumbers([2, 6, 1, 7, 8, 9]);