function listProcessor(array) {
    let result = [];

    const list = {
        add: (str) => result.push(str),
        remove: (words) => result = result.filter((word) => word !== words),
        print: () => console.log(result.join(','))
    }

    array.forEach(element => {

        [command, word] = element.split(' ');
        return list[command](word);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

//add <string> - adds the following string in an inner collection.
//remove <string> - removes all occurrences of the supplied <string> from the inner collection.
//print - prints all elements of the inner collection joined by ",".