function employees(arrayOfStrings) {

    obj = {

    }

    for (const name of arrayOfStrings) {
        obj[name] = name.length;
    }

    for (const key in obj) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])