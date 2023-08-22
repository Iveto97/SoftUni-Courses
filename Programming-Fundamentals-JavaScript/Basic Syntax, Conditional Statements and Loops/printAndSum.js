function printAndSum(start, end) {
    let sum, buff;
    sum = 0;
    buff = ``;
    while (start <= end) {
        buff += `${start} `;
        sum += start;
        start++;
    }
    console.log(`${buff}`);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60)