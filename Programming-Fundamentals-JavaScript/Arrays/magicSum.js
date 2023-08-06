function magicSum(arr, magicNum) {
    let i, o, magicArr;
    magicArr = [];

    for (i = 0; i < arr.length; i++) {
        magicArr = [];

        for (o = i + 1; o < arr.length; o++) {

            if (arr[i] + arr[o] === magicNum) {
                magicArr.push(arr[i]);
                magicArr.push(arr[o]);
                console.log(magicArr.join(" "));
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("------------------");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log("------------------");
magicSum([1, 2, 3, 4, 5, 6], 6);