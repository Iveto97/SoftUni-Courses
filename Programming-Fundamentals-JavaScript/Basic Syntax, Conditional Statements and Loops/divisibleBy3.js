function divisibleBy3() {
    let i;
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

divisibleBy3()