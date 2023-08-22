function phoneBook(data) {

    let personData;
    personData = {};

    for (const el of data) {
        let [name, number] = el.split(" ");

        if (personData.hasOwnProperty(name)) {
            personData[name] = number;
        } else {
            personData[name] = number;
        }
    }

    for (const [key, value] of Object.entries(personData)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])