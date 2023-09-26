function negativePositiveNumbers(array) {
    const newArray = [];
    for (const number of array) {
        if (number < 0) {
            newArray.unshift(number);
        } else {
            newArray.push(number);
        }
    }
    newArray.forEach(element => {
        console.log(element);
    });
}

negativePositiveNumbers([3, -2, 0, -1]);