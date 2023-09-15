function starEnigma(data) {

    let numberMessages = Number(data.shift());
    let count = 0;
    let patternStar = /[star]/gi;
    let planets = [];
    let attacked = [];
    let destroyed = [];
    let countAtk = 0;
    let countDes = 0;
    for (const line of data) {
        count = 0;
        let message = line.split('');

        for (const el of message) {
            if (el.match(patternStar)) {
                count++;
            }
        }

        for (let index = 0; index < message.length; index++) {
            let ascii = message[index].charCodeAt();
            let result = String.fromCharCode(ascii - count);
            message[index] = result;
        }

        message = message.join('');
        planets.push(message);

    }

    let patternMessage = /@(?<name>[A-Za-z]+)[^-@!:>]*:(?<population>\d+)[^-@!:>]*!(?<attack>[A|D])![^-@!:>]*\->(?<soldier>\d+)/g;
    let info = patternMessage.exec(planets);

    while (info !== null) {

        let name = info.groups['name'];
        let population = info.groups['population'];
        let attack = info.groups['attack'];
        let soldier = info.groups['soldier'];
        if (attack === 'A') {
            attacked.push(name);
            countAtk++;
        } else if (attack === 'D') {
            destroyed.push(name);
            countDes++;
        }

        info = patternMessage.exec(planets);
    }

    let sortedAttack = attacked.sort((a, b) => a.localeCompare(b));
    let sortedDestroyed = destroyed.sort((a, b) => a.localeCompare(b))

    console.log(`Attacked planets: ${countAtk}`);
    for (const planet of sortedAttack) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${countDes}`);
    for (const planet of sortedDestroyed) {
        console.log(`-> ${planet}`);
    }
}

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']

);