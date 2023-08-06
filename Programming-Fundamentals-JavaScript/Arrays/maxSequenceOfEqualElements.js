function maxSequenceOfEqualElements(arr) {
    let i, o, num, sequences, longestSequence;
    num = 0;
    sequences = [];
    longestSequence = [];
    for (i = 0; i < arr.length; i++) {
        sequences = [];
        num = arr[i];

        for (o = i + 1; o < arr.length; o++) {
            if (num === arr[o]) {
                sequences.push(arr[o]);
            } else {
                break;
            }
        }
        sequences.push(num);

        if (longestSequence.length < sequences.length) {
            longestSequence = sequences;
        }
    }
    console.log(longestSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] );
console.log("------------------");
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log("------------------");
maxSequenceOfEqualElements([4, 4, 4, 4] );
console.log("------------------");
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3] );