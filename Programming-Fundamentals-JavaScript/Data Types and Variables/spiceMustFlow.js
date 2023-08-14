function spiceMustFlow(startingYield) {
    let consume, days, leaving;
    consume = 0;
    days = 0;
    leaving = 0;
    while (startingYield >= 100) {

        leaving += (startingYield - 26);
        startingYield -= 10;
        days++;

    }

    leaving -= 26;
    if(leaving < 0) {
        leaving = 0;
    }
    
    console.log(days);
    console.log(leaving);
}
spiceMustFlow(200)