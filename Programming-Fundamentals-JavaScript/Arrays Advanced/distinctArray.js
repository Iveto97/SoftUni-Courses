function distinctArray(arr) {
    let newArray;
    newArray = [];
    for (const number of arr) {
        if(!newArray.includes(number)) {
            newArray.push(number);
        }
    }
    console.log(newArray.join(" "));
}

distinctArray([1, 2, 3, 4]);
console.log("-----------------------");
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log("-----------------------");
distinctArray([20, 8, 12, 13, 4, 4, 4, 8, 5]);