function carFactory(car) {
    let order = {};
    order.model = car.model;
    if (car.power <= 90) {
        order.engine = {
            power: 90,
            volume: 1800
        };
    } else if (car.power > 90 && car.power <= 120) {
        order.engine = {
            power: 120,
            volume: 2400
        };
    } else if (car.power > 120 && car.power <= 200) {
        order.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (car.carriage === 'hatchback') {
        order.carriage = {
            type: 'hatchback',
            color: car.color
        }
    } else if ( car.carriage === 'coupe') {
        order.carriage = {
            type : 'coupe',
            color : car.color
        }
    }

    if (car.wheelsize % 2 !== 0) {
        order.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    } else {
        let diameter = car.wheelsize - 1;
        order.wheels = [diameter, diameter, diameter, diameter];
    }
    
    return order;
}

let car = {
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
};

let newCar = carFactory(car);
console.log(newCar);