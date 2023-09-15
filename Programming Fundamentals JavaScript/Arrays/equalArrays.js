function equalArrays(firstArr, secondArr) {
    let i, j, firstArrNum, secondArrNum, sum, flag;
    flag = false;
    sum = 0;

    for (i = 0; i < firstArr.length; i++) {
        firstArrNum = Number(firstArr[i]);

        for (j = i; j <= i; j++) {
            secondArrNum = Number(secondArr[j]);

            if (firstArrNum === secondArrNum) {
                sum += firstArrNum;
            } else {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                flag = true;
                break;
            }

            if (flag) {
                break;
            }
        }

        if (flag) {
            break;
        }
    }

    if (flag === false) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30'] )
console.log("------------------");
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
console.log("------------------");
equalArrays(['1'], ['10'])