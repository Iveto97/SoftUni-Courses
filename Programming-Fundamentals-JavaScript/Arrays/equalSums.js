function equalSums(arr) {
    let i, firstNum, rightNumSum, r, l, leftNumSum;
    rightNumSum = 0;
    leftNumSum = 0;
    for (i = 0; i < arr.length; i++) {
        firstNum = arr[i];
        rightNumSum = 0;
        leftNumSum = 0;
        for (r = i + 1; r < arr.length; r++) {
            rightNumSum += arr[r];
        }
        for (l = i - 1; l < arr.length; l--) {
            if (l < 0) {
                break;
            }
            leftNumSum += arr[l];
        }

        if (rightNumSum === leftNumSum) {
            break;
        }
    }
    if (rightNumSum === leftNumSum) {
        console.log(i);
    } else if (rightNumSum === 0 && leftNumSum === 0) {
        console.log(i);
    } else if (rightNumSum !== leftNumSum) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);
console.log("------------------");
equalSums([1, 2] );
console.log("------------------");
equalSums([1]);
console.log("------------------");
equalSums([1, 2, 3]);
console.log("------------------");
equalSums([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4]);