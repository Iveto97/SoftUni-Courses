function storeCatalogue(productList) {
    
    let sortedList = productList.sort((a, b) => a.localeCompare(b));
    let catalogue = {};

    for (const productAndPrice of sortedList) {
             let [product, price] = productAndPrice.split(' : ');
        price = Number(price);      
        
            if(!catalogue.hasOwnProperty(product[0])){
                catalogue[product [0] ] = {};
            }
            if(catalogue.hasOwnProperty(product[0])) {
                catalogue[product[0]][product]= price;
            }
    }
   
    for (let char in catalogue) { 
        console.log(char);
        for(let product in catalogue[char]){
            console.log(`  ${product}: ${catalogue[char][product]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])