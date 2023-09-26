function fruit(typeOfFruit, weightInGrams, pricePerKilogram) {

    let weightInKilograms = weightInGrams / 1000;
    let totalPrice = weightInKilograms * pricePerKilogram;
    return (`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}

console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));