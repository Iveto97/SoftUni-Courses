function aggregateElements(arr) {
    let sumAll = 0;
    let concatEl = '';
    let inverseEl = 0;
    for (const element of arr) {
        sumAll += element;
        inverseEl += (1 / element);
        concatEl += element;
    }
    console.log(sumAll);
    console.log(inverseEl);
    console.log(concatEl);
}

aggregateElements([2, 4, 8, 16]);