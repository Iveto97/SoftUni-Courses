function towns(arr) {
    let townObj, town, latitude, longitude;
    townObj = {

    };

    for (let townData of arr) {
        [town, latitude, longitude] = townData.split(" | ");
        townObj.town = town;
        townObj.latitude = Number(latitude).toFixed(2);
        townObj.longitude = Number(longitude).toFixed(2);
        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)