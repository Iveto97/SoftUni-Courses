function arrayManipulator(arrayOfIntegers, arrayOfStringCommands) {
    let i, secondNum, first, second, sum;

    for (let el of arrayOfStringCommands) {
        [command, firstNum, secondNum] = el.split(' ');

        switch (command) {
            case "add":
                arrayOfIntegers.splice(firstNum, 0, +secondNum);
                break;
            case "addMany":
                let currEl = 0;
                let remove = el.split(' ');
                for (let n = remove.length - 1; n >= 2 ; n--) {
                    currEl = remove[n];
                    arrayOfIntegers.splice(firstNum, 0, +currEl);
                }
                break;
            case "contains":
                    let index = arrayOfIntegers.indexOf(+firstNum);
                    console.log(index);
                break;
            case "remove":
                arrayOfIntegers.splice(firstNum, 1);
                break;
            case "shift":
                let position = +firstNum;
                for (let k = 0; k < position; k++) {
                    let firstEl = arrayOfIntegers.shift();
                    arrayOfIntegers.push(firstEl);
                }
                break;
            case "sumPairs":
               let elements = arrayOfIntegers.reduce(function (total, el, firstNum) {
                if(firstNum % 2 === 0) {
                    total.push(+arrayOfIntegers[firstNum] + (+arrayOfIntegers[firstNum + 1] || 0));
                }
                return total;
               }, []);
               arrayOfIntegers = elements;
                break;
        }
    }
    console.log(`[ ${arrayOfIntegers.join(", ")} ]`);
}

arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
    
)