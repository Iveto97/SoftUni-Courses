function diagonalSums(matrix) {
    
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrix.length - 1;
    for (const row of matrix) {
        firstDiagonal += row[firstIndex++];
        secondDiagonal += row[secondIndex--];
    }
    console.log(firstDiagonal,secondDiagonal);
}

console.log(diagonalSums([[3, 5, 17],
                          [-1,7, 14], 
                          [1,-8, 89]]));