function commonElements(firstStr, secondStr) {
    let i, element;
    for (i = 0; i < firstStr.length; i++) {
        element = firstStr[i];
        if (secondStr.includes(element)) {
            console.log(element);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log("------------------");
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
