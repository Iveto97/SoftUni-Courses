function bombNumbers(sequenceOfNumbers, specialBombNumberWithPower) {

    let sum = 0;
    let bombNum = specialBombNumberWithPower.shift();
    let power = specialBombNumberWithPower.shift();
    
    for (let index = 0; index < sequenceOfNumbers.length; index++) {
        if(sequenceOfNumbers[index] === bombNum) {
            let startNum = index - power;
            let bombPower = 1 + (power * 2);

            while (startNum < 0) {
                startNum++;
                bombPower--;
            }
            sequenceOfNumbers.splice(startNum, bombPower);
            index--;
        }
        
    }

    for (const number of sequenceOfNumbers) {
        sum += number;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
console.log("--------------------");
bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3]);
console.log("--------------------");
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);
console.log("--------------------");
bombNumbers([1, 1, 2, 1, 1, 1,2, 1, 1, 1],[2, 1]);