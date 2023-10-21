function heroicInventory(input) {
    const allRegister = [];

    for (const hero of input) {
        let heroRegister = {};
        let [heroName, heroLevel, items] = hero.split(' / ');
        heroRegister.name = heroName;
        heroRegister.level = Number(heroLevel);
        if(items !== undefined) {
            let heroItem = items.split(', ');
            heroRegister.items = heroItem;
        } else {
            heroRegister.items = [];
        }
        allRegister.push(heroRegister);
    };
    const heroRegisterToJSON = JSON.stringify(allRegister);
    console.log(heroRegisterToJSON);
}

heroicInventory(['Jake / 1000']);