function evenPositionElement(inputArray) {
    const evenElements = [];
    for (let index = 0; index < inputArray.length; index += 2) {
        evenElements.push(inputArray[index]);
    }
    return evenElements.join(' ');
}

console.log(evenPositionElement(['5', '10']));