function cookingByNumbers(number, operation1, operation2, operation3, operation4, operation5) {

    let operations = operation1 + ' ' + operation2 + ' ' + operation3 + ' ' + operation4 + ' ' + operation5;
    let operation = operations.split(' ');

    for (const operator of operation) {

        switch (operator) {
            case 'chop': number = number / 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number = number - (number * 0.2); break;
            default: console.log('error'); break;
        }
        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');