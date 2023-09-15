function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let totalPrice;
    totalPrice = 0;
    if (dayOfTheWeek === `Friday`) {
        switch (typeOfTheGroup) {
            case `Students`: totalPrice = groupOfPeople * 8.45; break;
            case `Business`: totalPrice = groupOfPeople * 10.90; break;
            case `Regular`: totalPrice = groupOfPeople * 15; break;
        }
    } else if (dayOfTheWeek === `Saturday`) {
        switch (typeOfTheGroup) {
            case `Students`: totalPrice = groupOfPeople * 9.80; break;
            case `Business`: totalPrice = groupOfPeople * 15.60; break;
            case `Regular`: totalPrice = groupOfPeople * 20; break;
        }
    } else if (dayOfTheWeek === `Sunday`) {
        switch (typeOfTheGroup) {
            case `Students`: totalPrice = groupOfPeople * 10.46; break;
            case `Business`: totalPrice = groupOfPeople * 16; break;
            case `Regular`: totalPrice = groupOfPeople * 22.50; break;
        }
    }

    if (typeOfTheGroup === `Students` && groupOfPeople >= 30) {
        totalPrice = totalPrice - (totalPrice * (15 / 100));
    } else if (typeOfTheGroup === `Business` && groupOfPeople >= 100) {
        groupOfPeople = groupOfPeople - 10;
        if (dayOfTheWeek === `Friday`) {
            totalPrice = groupOfPeople * 10.90;
        } else if (dayOfTheWeek === `Saturday`) {
            totalPrice = groupOfPeople * 15.60;
        } else if (dayOfTheWeek === `Sunday`) {
            totalPrice = groupOfPeople * 16;
        }
    } else if (typeOfTheGroup === `Regular` && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice = totalPrice - (totalPrice * (5 / 100));
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(115, "Business", "Sunday")