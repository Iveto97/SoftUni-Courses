function sameNumbers(number) {

    let numToStr = String(number);
    const firstNum = numToStr[0];
    let isTrue = true;
    let total = 0;

    for (const number of numToStr) {
        if (firstNum !== number) {
            isTrue = false;
        }
        total += Number(number);
    }
    console.log(isTrue);
    console.log(total);
}

sameNumbers(2222222);
sameNumbers(1234);