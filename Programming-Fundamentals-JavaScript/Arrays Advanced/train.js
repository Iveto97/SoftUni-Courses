function train(arr) {
    let wagons, maxCapacityWagon, command, commandArr, i, k;
    wagons = arr[0].split(" ");
    maxCapacityWagon = arr[1];

    for (i = 2; i < arr.length; i++) {
        command = arr[i];
        if (command.includes('Add')) {
            commandArr = command.split(" ");
            wagons.push(commandArr[1]);
        } else {
            for (k = 0; k < wagons.length; k++) {
                if (Number(wagons[k]) + Number(command) > maxCapacityWagon) {
                    continue;
                } else {
                    wagons[k] = Number(wagons[k]) + Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));

}

train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
console.log("-----------------------");
train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);