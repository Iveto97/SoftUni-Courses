function specialNumbers(n) {
    let second, first, sum;
    for (i = 1; i <= n; i++) {
        second = i % 10;
        first = parseInt(i / 10);
        sum = second + first;
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(20)