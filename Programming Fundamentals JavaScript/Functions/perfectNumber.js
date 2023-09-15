function perfectNumber(number) {
    let perfect;
    perfect = 0;

    sumOfPositiveDivisors(number);
    yesOrNo(perfect);

    function sumOfPositiveDivisors(divisor) {
        let num, i;
        num = divisor / 2;
        for (i = 1; i <= num; i++) {
            if (number % i === 0) {
                perfect += i;
            }
        }
    }

    function yesOrNo(perfectNum) {
        if (perfectNum === number) {
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.");
        }
    }
}

perfectNumber(6);
console.log("-------------------");
perfectNumber(8128);
console.log("-------------------");
perfectNumber(1236498);