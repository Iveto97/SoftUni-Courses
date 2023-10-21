function lowestPricesInCities(input) {
    const productList = {};
    for (const element of input) {
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!productList.hasOwnProperty(product)) {
            productList[product] = {};
        }

        if (productList[product]['price'] === undefined || productList[product]['price'] > price) {
            productList[product]['town'] = town;
            productList[product]['price'] = price;
        }
    }
    for (const key in productList) {
        console.log(`${key} -> ${productList[key]['price']} (${productList[key]['town']})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])