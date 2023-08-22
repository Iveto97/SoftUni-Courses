function multiplicationTable(number) {
    let i, result;
    for (i = 1; i <= 10; i++) {
        result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }
}

multiplicationTable(2)