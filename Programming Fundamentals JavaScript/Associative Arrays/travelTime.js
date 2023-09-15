function travelTime(travelData) {

    let country = {};

    for (const line of travelData) {
        let [countryName, townName, travelCost] = line.split(' > ');

        if (!country.hasOwnProperty(countryName)) {
            country[countryName] = {}
        }

        if (!country[countryName].hasOwnProperty(townName)) {
            country[countryName][townName] = travelCost;
        }

        if (country[countryName].hasOwnProperty(townName)) {
            let cost = country[countryName][townName];
            if (cost > travelCost) {
                country[countryName][townName] = travelCost;
            }
        }
    }

    let sortedCountry = Object.keys(country).sort((a, b) => a.localeCompare(b));

    let sortedPrice;
    for (const state of sortedCountry) {
        let result = '';
        result += `${state} -> `;

        sortedPrice = Object.keys(country[state]).sort((c, d) => country[state][c] - country[state][d]);

        for (const price of sortedPrice) {
            result += `${price} -> ${country[state][price]} `;
        }
        console.log(result);

    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);