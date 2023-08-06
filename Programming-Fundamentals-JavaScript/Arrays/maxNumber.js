function maxNumber(arr) {
    let i, j, num, result;
    j = 0;
    result = "";
    for (i = 0; i < arr.length; i++) {
        flag = true;
        num = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            if (num > arr[j]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag) {
            result += `${num} `;
        }
    }
    console.log(result);
}

maxNumber([14, 24, 3, 19, 15, 17]);
/*24 19 17*/
console.log("------------------");
maxNumber([41, 41, 34, 20]);
/*41 34 20*/
console.log("------------------");
maxNumber([27, 19, 42, 2, 13, 45, 48]);
/*48*/