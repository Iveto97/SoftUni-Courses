function magicMatrices(magicArray) {
    let sumRow = 0;
    let sumCol = 0;
    const arrayRow = [];
    const arrayCol = [];

    for (let index = 0; index < magicArray.length; index++) {
        sumRow = 0;
        sumCol = 0;
        sumRow = magicArray[index].reduce((a, b) => a + b, 0);
        arrayRow.push(sumRow);
        for (let i = 0; i < magicArray.length; i++) {
            sumCol += magicArray[i][index];
        }
        arrayCol.push(sumCol);
    }
    for (let ind = 0; ind < arrayCol.length; ind++) {
        for (let k = 0; k < arrayRow.length; k++) {
            if (arrayCol[ind] !== arrayRow[k]) {
                return 'false';
            }
        }
    }
    return 'true';
}

console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));