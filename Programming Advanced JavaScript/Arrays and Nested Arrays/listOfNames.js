function listOfNames(names) {

    const sortedArray = names.sort((a, b) => a.localeCompare(b));
    for (let index = 0; index < sortedArray.length; index++) {
        console.log(`${index + 1}.${sortedArray[index]}`);
    }
}

listOfNames(["John",

    "Bob",

    "Christina",

    "Ema"]);