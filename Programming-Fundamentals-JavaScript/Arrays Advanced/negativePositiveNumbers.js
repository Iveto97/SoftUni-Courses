function negativePositiveNumbers(arr) {
    let result, i;
    result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }
   
    return `${result.join("\n")} `;
}

console.log(negativePositiveNumbers(['7', '-2', '8', '9']));