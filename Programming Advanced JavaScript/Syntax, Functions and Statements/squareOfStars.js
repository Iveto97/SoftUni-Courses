function squareOfStars(params) {
    let num = Number(params);

    if (num > 0) {
        for (let index = 0; index < num; index++) {
            let star = '* '.repeat(num);
            console.log(star);
        }
    } else {
        for (let index = 0; index < 5; index++) {
            let star = '* '.repeat(5);
            console.log(star);
        }
    }
}

squareOfStars(0);