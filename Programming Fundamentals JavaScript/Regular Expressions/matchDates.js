function matchDates(dates) {
    let regexp = /(?<day>[0-9]{2})([-./])(?<month>[A-Za-z]{3})\2(?<year>[0-9]{4})/g;
    let validDate = null;

    while ((validDate = regexp.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])