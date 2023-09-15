function convertToObject(json) {
    let person, data;
    person = JSON.parse(json);
    data = Object.entries(person);

    for (let [key, value] of data) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');