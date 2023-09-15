
function cardGame(data) {

    let people = {};

    for (const elem of data) {

        let [namePlayer, gameCards] = elem.split(': ');
        let cards = gameCards.split(', ');
        if (!people.hasOwnProperty(namePlayer)) {
            people[namePlayer] = cards;
        } else {
            let currentValue = cards.concat(people[namePlayer]);
            people[namePlayer] = currentValue;

        }
    }
    let power = 0;
    let type = 0;
    let gamersPoints = {};
    let typeCard, powerCard;
    let sum = 0;
    for (const key in people) {
        let name = key;
        sum = 0;
        let cardPack = people[key];
        let set = new Set(cardPack);
        let cardArr = Array.from(set);

        for (const card of cardArr) {

            if (card.length === 2) {
                [powerCard, typeCard] = card.split('');
            } else {
                [powerCard, other, typeCard] = card.split('');
                powerCard = powerCard + other;
            }

            switch (powerCard) {
                case '2': power = 2; break;
                case '3': power = 3; break;
                case '4': power = 4; break;
                case '5': power = 5; break;
                case '6': power = 6; break;
                case '7': power = 7; break;
                case '8': power = 8; break;
                case '9': power = 9; break;
                case '10': power = 10; break;
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
                default: break;
            }

            switch (typeCard) {
                case 'S': type = 4; break;
                case 'H': type = 3; break;
                case 'D': type = 2; break;
                case 'C': type = 1; break;
                default: break;
            }
            let value = power * type;
            sum += value;
        }
        gamersPoints[name] = sum;
    }

    for (const key in gamersPoints) {
        console.log(`${key}: ${gamersPoints[key]}`);
    }

}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    );