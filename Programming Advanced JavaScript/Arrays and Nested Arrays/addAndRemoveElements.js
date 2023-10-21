function addAndRemoveElements(commands) {
    const arrayOfNumbers = [];
    let number = 0;
    const error = 'Empty';
    for (const command of commands) {
        number++;
        if (command === 'add') {
            arrayOfNumbers.push(number);
        } else if (command === 'remove') {
            const number = arrayOfNumbers.pop();
        }
    }
    if (arrayOfNumbers.length <= 0) {
        return error;
    } else {
        return arrayOfNumbers.join('\n');
    }
}


console.log(addAndRemoveElements(['remove', 'remove', 'remove']));