function circleArea(data) {
    let type = typeof (data);

    if (type === 'number') {
        let circleArea = Math.pow(data, 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);