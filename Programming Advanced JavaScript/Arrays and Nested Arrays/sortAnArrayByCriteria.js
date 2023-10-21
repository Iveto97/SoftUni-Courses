function sortAnArrayByCriteria(data) {
    const sorting = (a, b) => a.length - b.length || a.localeCompare(b);
    data.sort(sorting);
    data.forEach(element => {
        console.log(element);
    });
}

sortAnArrayByCriteria(['test', 'Deny', 'omen', 'Default']);