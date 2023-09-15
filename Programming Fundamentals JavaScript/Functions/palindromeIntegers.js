function palindromeIntegers(arrayOfPositiveIntegers) {
    let i, backwards, arr, o;

    for (i = 0; i < arrayOfPositiveIntegers.length; i++) {
        numberToArr(arrayOfPositiveIntegers[i]);

        function numberToArr(num) {
            backwards = [];
            arr = Array.from(String(num), Number);

            for (o = arr.length - 1; o >= 0; o--) {
                backwards += arr[o];
            }
            palindrome(num)
        }

        function palindrome(arrNum) {

            if (arrNum === Number(backwards)) {
                console.log("true");
            } else {
                console.log("false");
            }
        }
    }
}

palindromeIntegers([123,323,421,121]);
console.log("-------------------");
palindromeIntegers([32,2,232,1010]);