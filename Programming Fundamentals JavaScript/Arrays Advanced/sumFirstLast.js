function sumFirstLast(arr) {
    let sumFirstLastNum, firstEl, secondEl;
    firstEl = arr.shift();
    secondEl = arr.pop();
    return sumFirstLastNum = Number(firstEl) + Number(secondEl);
}

console.log(sumFirstLast(['5', '10']));