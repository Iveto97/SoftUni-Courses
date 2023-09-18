function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    const newDay = date.getDate();

    return `${newYear}-${newMonth}-${newDay}`
}

console.log(previousDay(2016, 1, 1));
console.log(previousDay(2015, 5, 10));