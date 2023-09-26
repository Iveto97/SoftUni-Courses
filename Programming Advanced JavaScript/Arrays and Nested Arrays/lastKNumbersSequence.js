function lastKNumbersSequence(n, k) {

    const sequence = [1];

    for (let index = 1; index < n; index++) {
        const x = sequence.length > k ? k : sequence.length;
        let sum = 0;
        for (let m = 1; m <= x; m++) {
            sum += Number(sequence[sequence.length - m]);
        }
        sequence.push(sum);
    }
    return sequence;
}


console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
