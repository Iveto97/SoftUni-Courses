function searchForANumber(firstArr, secondArr) {
    let numTake, deleteNum, searchNum, newArr, count;
    newArr = [];
    count = 0;
    numTake = secondArr[0];
    deleteNum = secondArr[1];
    searchNum = secondArr[2];

    newArr = firstArr.slice(0, numTake);
    newArr.splice(0, deleteNum);

    for (const number of newArr) {

        if (number === searchNum) {
            count++;
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 3, 1, 6],[5, 2, 3]);
console.log("--------------------");
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5]);