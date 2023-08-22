function orders(product, quantity) {

    switch (product) {
        case "coffee": console.log(calculatePrice(quantity, 1.50).toFixed(2)); break;
        case "water": console.log(calculatePrice(quantity, 1.00).toFixed(2)); break;
        case "coke": console.log(calculatePrice(quantity, 1.40).toFixed(2)); break;
        case "snacks": console.log(calculatePrice(quantity, 2.00).toFixed(2)); break;
        default: break;
    }

    function calculatePrice(num, price) {
        let totalPrice;
        return totalPrice = num * price;
    }
}

orders("water", 5 );
console.log("------------------------");
orders("coffee", 2);