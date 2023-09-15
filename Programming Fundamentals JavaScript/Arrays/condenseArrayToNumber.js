function condenseArrayToNumber(arr) {
    let i, sum;
    sum = [];

    while (arr.length > 1) {
        for (i = 0; i < arr.length - 1; i++) {
            sum[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = sum;
        sum = [];
    }

    console.log(arr.join());
}

condenseArrayToNumber([2,10,3])
console.log("------------------");
condenseArrayToNumber([5,0,4,1,2] )
console.log("------------------");
condenseArrayToNumber([1])