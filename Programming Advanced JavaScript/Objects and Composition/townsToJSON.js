function townsToJSON(townData) {
    const pattern = /\s*\|\s*/g;
    let data = townData.shift()
    .split(pattern);
    let towns = [];
    for (const town of townData) {
        let table = {};
        const townData = town.split(pattern);
        const firstNum = Number( townData[2]);
        const secondNum = Number( townData[3]);
        table[data[1]] = townData[1];
        table[data[2]] = Number(firstNum.toFixed(2));
        table[data[3]] = Number(secondNum.toFixed(2));
        towns.push(table);
    }
    const townsTojson = JSON.stringify(towns);
    console.log(townsTojson);
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);