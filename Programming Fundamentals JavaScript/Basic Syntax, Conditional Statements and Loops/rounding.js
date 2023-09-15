function rounding(numb, precision) {
    let roundNumb;
    if (precision > 15) {
        precision = 15;
    }

    roundNumb = numb.toFixed(precision);
    console.log(`${parseFloat(roundNumb)}`);
}

rounding(10.5 , 3)