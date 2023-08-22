                    /* --------- Object --------- */
function partyTime(data) {

    let vipList = [];
    let regularList = [];
    let guestList = {};

    let command = data.shift();

    while (command !== 'PARTY') {

        let first = command[0];

        if (isNaN(first)) {
            regularList.push(command);
        } else {
            vipList.push(command);
        }

        command = data.shift();
    }

    let allGuest = vipList.concat(regularList);

    for (const guest of data) {
        if(allGuest.includes(guest)) {
            allGuest.splice(allGuest.indexOf(guest), 1);
        }
    }

    console.log(allGuest.length);
    allGuest.forEach(element => {
            console.log(`${element}`);
   });
}

partyTime(['7IK9Yo0h',
'9NoBUajQ','Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)