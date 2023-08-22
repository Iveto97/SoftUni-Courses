function minerTask(data) {

    let miner = {};

    for (let index = 0; index < data.length; index += 2) {
        let resource = data[index];
        let quantity = data[index + 1];
        if (!miner.hasOwnProperty(resource)) {
            miner[resource] = quantity;
        } else {
            let total = Number(quantity) + Number(miner[resource]);
            miner[resource] = total;
        }
    }
    let collected = Object.entries(miner);

    collected.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Copper',
    '17'
    ]);