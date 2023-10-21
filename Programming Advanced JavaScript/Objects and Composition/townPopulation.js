function townPopulation(towns) {

    let registry = {};
    towns.forEach(town => {
        let [townName, townPopulation] = town.split(' <-> ');
        if (registry.hasOwnProperty(townName)) {
            let sum = Number(townPopulation) + Number(registry[townName]);
            registry[townName] = sum;
        } else {
            registry[townName] = townPopulation;
        }
    });
    for (const key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);