function addAndSubtract(first, second, third) {
    let sumFirstTwoNum;

    sum(first, second);
    subtract(sumFirstTwoNum, third);

    function sum(one, two) {
        sumFirstTwoNum = one + two;
    }

    function subtract(result, three) {
        let sub;
        sub = result - three;
        console.log(sub);
    }
}

addAndSubtract(23,6,10);
console.log("-------------------");
addAndSubtract(1,17,30);
console.log("-------------------");
addAndSubtract(42,58,100);