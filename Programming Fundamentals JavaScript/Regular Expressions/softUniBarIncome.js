function softUniBarIncome(data) {
    let line = data.shift();
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+.*\d*)\$/g;
    let totalPrice;
    let income = 0;

    while (line !== 'end of shift') {
        totalPrice = 0;
        let result = [...line.matchAll(pattern)];

        for (const el of result) {
            let customer = el.groups['customer'];
            let product = el.groups['product'];
            let count = Number(el.groups['count']);
            let price = Number(el.groups['price']);

            totalPrice += (count * price);
            income += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        line = data.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);