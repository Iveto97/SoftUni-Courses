function addressBook(data) {

    let book, sortBook;
    book = {};
    for (const line of data) {
        let [name, address] = line.split(":");
        if (book.hasOwnProperty(name)) {
            book[name] = address;
        } else {
            book[name] = address;
        }
    }
    sortBook = Object.keys(book)
        .sort((a, b) => a.localeCompare(b));

    for (const element of sortBook) {
        console.log(`${element} -> ${book[element]}`);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])