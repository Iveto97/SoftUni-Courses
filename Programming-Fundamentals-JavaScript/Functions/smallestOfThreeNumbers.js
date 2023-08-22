function smallestOfThreeNumbers(a, b, c) {
    smallestNumber(a, b, c);

    function smallestNumber(one, two, three) {
        let four;
        four = 0;
        if (one <= two && one <= three) {
            four = one;
        } else if (two <= one && two <= three) {
            four = two;
        } else if (three <= one && three <= two) {
            four = three;
        }
        console.log(four);
    }
}

smallestOfThreeNumbers(2,5,3);
console.log("-------------------");
smallestOfThreeNumbers(600,342,123);
console.log("-------------------");
smallestOfThreeNumbers(25,21,4);
console.log("-------------------");
smallestOfThreeNumbers(2,2,2);