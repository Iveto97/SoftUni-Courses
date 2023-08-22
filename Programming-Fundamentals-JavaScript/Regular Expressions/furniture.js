function furniture(data) {
    let regexp = />>(?<furniture>([A-Z [a-z]+]*))<<(?<price>[0-9]{1,}[.]{0,}[0-9]{0,})!(?<quantity>[0-9]{1,})/g;
    let boughtFurnitures = [];
    let boughtFurniture = null;
    let totalprice = 0;

    while ((boughtFurniture = regexp.exec(data)) !== null) {
        let furniture = boughtFurniture.groups['furniture'];
        boughtFurnitures.push(furniture);
        let price = boughtFurniture.groups['price'];
        let quantity = boughtFurniture.groups['quantity'];
        totalprice += (price * quantity);
    }

    if (boughtFurnitures.length > 0) {
        console.log('Bought furniture: ');
        for (const furniture of boughtFurnitures) {
            console.log(`${furniture}`);
        }
        console.log(`Total money spend: ${totalprice.toFixed(2)}`);
    } else {
        console.log('Bought furniture: ');
        console.log(`Total money spend: ${totalprice.toFixed(2)}`);
    }
}

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);