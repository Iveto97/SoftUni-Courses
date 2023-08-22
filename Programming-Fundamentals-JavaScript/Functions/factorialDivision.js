function factorialDivision(firstNum, secondNum) {

    firstFactorial(firstNum);
    secondFactorial(secondNum);

function firstFactorial(first) {
    let num, factorialOne;
    num = first - 1;
    factorialOne = 1;
    for(i = num; i > 0; i--) {
        factorialOne *= i;
    }
}

function secondFactorial(second) {
    let num, factorialTwo;
    num = second - 1;
    factorialTwo= 1;
    for(i = num; i > 0; i--) {
        factorialTwo *= i;
    }
    console.log(factorialTwo);
}
}

factorialDivision(5, 2);