function dungeonestDark(dungeonRooms) {
    let arrDungeonRooms, roomCount, initialHealth, initialCoins, i, rooms, potion;
    initialCoins = 0;
    initialHealth = 100;
    arrDungeonRooms = [];
    rooms = [];
    roomCount = 0;
    potion = 0;
    arrDungeonRooms = dungeonRooms[0].split('|');

    for (i = 0; i < arrDungeonRooms.length; i++) {
        rooms = arrDungeonRooms[i].split(' ');
        roomCount++;
        if (rooms[0] === "potion") {
            initialHealth += Number(rooms[1]);
            if (initialHealth > 100) {
                potion = initialHealth - 100;
                initialHealth = 100;
            }
            console.log(`You healed for ${rooms[1] - potion} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (rooms[0] === "chest") {
            initialCoins += Number(rooms[1]);
            console.log(`You found ${rooms[1]} coins.`);
        } else {
            initialHealth -= Number(rooms[1]);
            if (initialHealth <= 0) {
                console.log(`You died! Killed by ${rooms[0]}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
            console.log(`You slayed ${rooms[0]}.`);
        }
    }

    if (initialHealth > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("------------------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);