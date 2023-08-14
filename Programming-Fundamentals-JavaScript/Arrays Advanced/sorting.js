function sorting(array) {
    let result, sortResult;
    sortResult = [];
    result = array.sort((a, b) => a - b);

    while (result.length !== 0) {
        sortResult.push(result[result.length - 1] && result.pop());
        sortResult.push(result[0] && result.shift());
    }
    console.log(sortResult.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log("--------------------");
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
