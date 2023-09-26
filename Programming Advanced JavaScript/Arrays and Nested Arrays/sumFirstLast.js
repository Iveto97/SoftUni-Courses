function sumFirstLast(array) {
    let copy = array;
    const firstNumber = copy.shift();
    const lastNumber = copy.pop();
    const sum = Number(firstNumber) + Number(lastNumber);
    return sum;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));