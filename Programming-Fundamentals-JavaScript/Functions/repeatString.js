function repeatString(str, repeatNum) {
    let repeatedStr;
    repeatedStr = "";
    for (i = 1; i <= repeatNum; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

console.log(repeatString("abc", 3));
console.log("------------------------");
console.log(repeatString("String", 2));
