function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCounter, swordCounter, shieldCounter, armorCounter, i, totalPrice;
    helmetCounter = 0;
    swordCounter = 0;
    shieldCounter = 0;
    armorCounter = 0;
    for (i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            helmetCounter++;
        }
        if (i % 3 === 0) {
            swordCounter++
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCounter++;
            if (shieldCounter !== 0 && shieldCounter % 2 === 0) {
                armorCounter++;
            }
        }
    }

    totalPrice = (helmetCounter * helmetPrice) + (swordCounter * swordPrice) + (shieldCounter * shieldPrice) + (armorCounter * armorPrice);
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200)