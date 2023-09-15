function triangleOfNumbers(n) {
    let row, column, buff;
    row = 0;
    column = 0;
    buff = ``;
    for (row = 1; row <= n; row++) {
        buff = ``;
        for (column = 1; column <= row; column++) {
            buff += `${row} `;
        }
        console.log(`${buff} `);
    }
}

triangleOfNumbers(6)