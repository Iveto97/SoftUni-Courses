function mergeArrays(firstArr, secondArr) {
    let i, num, newArr;
    num = 0;
    newArr = [];
    for (i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            num = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            num = firstArr[i] + secondArr[i];
        }
        newArr.push(num);
        num = 0;
    }
    console.log(newArr.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
console.log("------------------");
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);