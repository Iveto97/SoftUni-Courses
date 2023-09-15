function storage(data) {

    let list, add;
    list = new Map();

    for (const line of data) {
        let [item, quantity] = line.split(" ");

        if (list.has(item)) {
            add = list.get(item);
            quantity = Number(add) + Number(quantity);
            list.set(item, quantity);
        } else {
            list.set(item, quantity);
        }
    }

    for (const product of list) {
        console.log(`${product[0]} -> ${product[1]}`);

    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)