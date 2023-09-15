function convertToJSON(name, lastName, hairColor) {
    let object, names;
    object = {
        name,
        lastName,
        hairColor
    }

    names = JSON.stringify(object);
    console.log(names);
}

convertToJSON('George', 'Jones',
'Brown')