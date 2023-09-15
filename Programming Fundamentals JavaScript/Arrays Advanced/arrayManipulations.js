function arrayManipulations(arrayOfStrings) {
    let arrayToManipulate, command, arrCommand, commands, firstNum, secondNum;
    command = [];
    commands = [];
    arrCommand = [];
    arrayToManipulate = arrayOfStrings[0]

        .split(" ")
        .map(Number);

    for (i = 1; i < arrayOfStrings.length; i++) {
        [command, firstNum, secondNum] = arrayOfStrings[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add":
                arrayToManipulate.push(firstNum);
                break;
            case "Remove":
                for (n = 0; n < arrayToManipulate.length; n++) {
                    if (arrayToManipulate[n] === firstNum) {
                        arrayToManipulate.splice(n, 1);
                    }
                }

                break;
            case "RemoveAt":
                arrayToManipulate.splice(firstNum, 1);
                break;
            case "Insert":
                arrayToManipulate.splice(secondNum, 0, firstNum);
                break;
            default: break;


        }
    }
    return arrayToManipulate.join(" ");

}

console.log(arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
));