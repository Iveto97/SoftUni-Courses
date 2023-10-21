// restock <microelement> <quantity> - increases the stored quantity of the given microelement
// prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
// report - returns information about the stored microelements, in the order described below, including zero elements

function solution() {

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    
    return function (data) {
        if(data.includes('restock')) {
            let [restock, microelement, quantity] = data.split(' ');
            microelements[microelement] = microelements[microelement] + Number(quantity);
            return `Success`;

        }
        if(data.includes('prepare')) {
            let [prepare, recipe, quantity] = data.split(' ');

            switch (recipe) {
                case 'apple': 
                    if(microelements.carbohydrate >= (1 * Number(quantity)) && microelements.flavour >= (Number(quantity) * 2)) {
                        microelements.carbohydrate -= (1 * Number(quantity));
                        microelements.flavour -= (Number(quantity) * 2);
                        return `Success`;
                    } else if (microelements[carbohydrate] < (1 * quantity)){
                        return `Error: not enough carbohydrate in stock`;
                    } else {
                        return `Error: not enough flavour in stock`;
                    }
                break;
                case 'lemonade': 
                    if(microelements.carbohydrate >= (10 * Number(quantity)) && microelements.flavour >= (Number(quantity) * 20)) {
                        microelements.carbohydrate -= (10 * Number(quantity));
                        microelements.flavour -= (Number(quantity) * 20);
                        return `Success`;
                    }  else if (microelements.carbohydrate < (10 * Number(quantity))){
                        return `Error: not enough carbohydrate in stock`;
                    } else {
                        return `Error: not enough flavour in stock`;
                    }
                break;
                case 'burger': 
                    if(microelements.carbohydrate >= (5 * Number(quantity)) && microelements.flavour >= (Number(quantity) * 3) && microelements.fat >= (Number(quantity) * 7)) {
                        microelements.carbohydrate -= (5 * Number(quantity));
                        microelements.flavour -= (Number(quantity) * 3);
                        microelements.fat -= (Number(quantity) * 7);
                        return `Success`;
                    }  else if (microelements.carbohydrate < (5 * Number(quantity))){
                        return `Error: not enough carbohydrate in stock`;
                    } else if (microelements.flavour < (3 * Number(quantity))){
                        return `Error: not enough flavour in stock`;
                    } else {
                        return `Error: not enough fat in stock`;
                    }
                break;
                case 'eggs': 
                    if(microelements.protein >= (5 * Number(quantity)) && microelements.flavour >= (Number(quantity) * 1) && microelements.fat >= (Number(quantity) * 1)) {
                        microelements.protein -= (5 * Number(quantity));
                        microelements.flavour -= (Number(quantity) * 1);
                        microelements.fat -= (Number(quantity) * 1);
                        return `Success`;
                    }  else if (microelements.protein < (5 * Number(quantity))){
                        return `Error: not enough protein in stock`;
                    } else if (microelements.flavour < (1 * Number(quantity))){
                        return `Error: not enough flavour in stock`;
                    } else {
                        return `Error: not enough fat in stock`;
                    }
                break;
                case 'turkey': 
                    if(microelements.protein >= (10 * Number(quantity)) && microelements.flavour >= (Number(quantity) * 10) && microelements.fat >= (Number(quantity) * 10 ) && microelements.carbohydrate >= (Number(quantity) * 10 )) {
                        microelements.protein -= (10 * Number(quantity));
                        microelements.flavour -= (Number(quantity) * 10);
                        microelements.fat -= (Number(quantity) * 10);
                        microelements.carbohydrate -= (Number(quantity) * 10);
                        return `Success`;
                    }  else if (microelements.carbohydrate < (10 * Number(quantity))){
                        return `Error: not enough carbohydrate in stock`;
                    } else if (microelements.flavour < (10 * Number(quantity))){
                        return `Error: not enough flavour in stock`;
                    } else if (microelements.protein < (10 * Number(quantity))){
                        return `Error: not enough protein in stock`;
                    } else {
                        return `Error: not enough fat in stock`;
                    }
                break;
                default:
                    break;
            }
        }
        if(data === 'report') {
            return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
        }
    }
}

let manager = solution();

console.log (manager("restock flavour 50")); // Success
console.log (manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager("restock carbohydrate 10")); // Success
console.log (manager("restock flavour 10")); // Success
console.log (manager("prepare apple 1")); // Success
console.log (manager("restock fat 10")); // Success
console.log (manager("prepare burger 1")); // Success
console.log (manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55

