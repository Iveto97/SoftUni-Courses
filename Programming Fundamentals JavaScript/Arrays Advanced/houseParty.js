function houseParty(guests) {
    let guestArr, guestList, index, personName;
    guestList = [];

    for (const person of guests) {
        guestArr = person.split(" ");
        personName = guestArr[0];
        if (guestArr.includes("not")) {

            if (guestList.includes(personName)) {
                index = guestList.indexOf(personName);
                if (index !== -1) {
                    guestList.splice(index, 1);
                }
            } else {
                console.log(`${guestArr[0]} is not in the list!`);
            }
        } else {
            if (guestList.includes(personName)) {
                console.log(`${personName} is already in the list!`);
            } else {
                guestList.push(personName);

            }
        }

    }
    console.log(guestList.join(`\n`));

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
    console.log("------------");
    houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])