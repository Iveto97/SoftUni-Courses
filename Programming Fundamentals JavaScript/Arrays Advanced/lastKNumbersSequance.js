function lastKNumbersSequence(n, k) {
    let newArr = [1];

    for (let b = 1; b < n; b++) {
        newArr[b] = sumLast(newArr, k);
    }

    function sumLast(arr, k) {
        k = arr.length > k ? k : arr.length;
        let sum = 0;
        for (let index = 1; index <= k; index++) {
            sum += arr[arr.length - index];
            
        }
        return sum;
    }

    return newArr.join(" ");
}

console.log(lastKNumbersSequence(8, 2));