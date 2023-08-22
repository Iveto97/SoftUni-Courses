function storeProvision(currentStock, orderedProducts) {
    let i, product, amount, index, w, res, localStore;
    res = [];
    /*class ProductObj {
        constructor(productName, number) {
            this.productName = productName;
            this.number = number;
        }
    }
    for (i = 0; i < orderedProducts.length; i += 2) {
        product = orderedProducts[i];
        amount = Number(orderedProducts[i + 1]);

        if (currentStock.includes(product)) {
            index = currentStock.indexOf(product);
            amount += Number(currentStock[index + 1]);
            currentStock.splice(index + 1, 1, amount);
        } else {
            currentStock.push(product);
            currentStock.push(amount);
        }
    }

    for (w = 0; w < currentStock.length; w += 2) {
        pro = new ProductObj(currentStock[w], currentStock[w + 1]);
        res.push(pro);
    }

    for (let key of res) {
        console.log(`${key.productName} -> ${key.number}`);
    }*/
    localStore = {};

    for (i = 0; i < currentStock.length; i += 2) {
        product = currentStock[i];
        amount = Number(currentStock[i + 1]);
        localStore[product] = amount;
    }

    for (let index = 0; index < orderedProducts.length; index+=2) {
        product = orderedProducts[index];

        if(!localStore.hasOwnProperty(product)) {
            localStore[product] = 0;
        }
        localStore[product] += Number(orderedProducts[index + 1]);
    }

    for (const product in localStore) {
        console.log(`${product} -> ${localStore[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])