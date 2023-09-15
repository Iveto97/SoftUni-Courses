function companyUsers(data) {

    let set = {};

    for (const line of data) {
        let [companyName, employeeId] = line.split(' -> ');

        if (!set.hasOwnProperty(companyName)) {
            set[companyName] = [];
        }
        set[companyName].push(employeeId);
    }

    let sortedNames = Object.entries(set);

    sortedNames.sort((a, b) => a[0].localeCompare(b[0]));

    for (const names of sortedNames) {

        let companyName = names[0];
        console.log(companyName);

        let set = new Set(names[1]);

        set.forEach(element => {
            console.log(`-- ${element}`);
        });
    }
}

companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']
    );