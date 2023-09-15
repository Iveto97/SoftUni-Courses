function sumOfNumbersNToM(n, m) {
    const numN = Number(n);
    const numM = Number(m);
    let result = 0;
    for (let index = numN; index <= numM; index++) {
        result += index;
    }
    console.log(result);
}

sumOfNumbersNToM('-8', '20');