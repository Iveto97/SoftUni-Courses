function listOfProducts(arrayOfProducts) {
    let sortedList, n;
    sortedList = arrayOfProducts.sort();
    for (n = 0; n < sortedList.length; n++) {
        console.log(`${n + 1}.${sortedList[n]}`);
    }

}

listOfProducts(['Watermelon', 'Banana', 'Apples'] );