function inventory(info) {
    let result, heroData, heroLevel, heroName, items;
    result = [];

    for (const line of info) {
        [heroName, heroLevel, items] = line.split(" / ");

        heroData = {
            name: heroName,
            level: Number(heroLevel),
            items: items
        }
        result.push(heroData);
    }
    result.sort((a, b) => a.level - b.level);

    for (const element of result) {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);