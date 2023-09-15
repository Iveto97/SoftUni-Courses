function addAndSubtract(arr) {
    let i, num, modifiedArray, sumOriginalArray, sumModifiedArray;
    modifiedArray = [];
    sumModifiedArray = 0;
    sumOriginalArray = 0;
    for (i = 0; i < arr.length; i++) {
        num = Number(arr[i]);
        sumOriginalArray += num;
        if (num % 2 === 0) {
            num += i;
            sumModifiedArray += num;
        } else {
            num -= i;
            sumModifiedArray += num;
        }
        modifiedArray.push(num);
    }
    console.log(modifiedArray);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
console.log("-------------------");
addAndSubtract([-5, 11, 3, 0, 2]);