function race(data) {

    let pattern = data.shift().split(', ');
    let person = {};
    for (const racer of pattern) {
        person[racer] = 0;
    }

    let namesPattern = /(?<names>[A-Za-z]{1,})/g;
    let digitPattern = /[0-9]/g;

    let line = data.shift();
    while (line !== 'end of race') {
        let currentName = line.match(namesPattern).join('');
        let distance = line.match(digitPattern);
        let currentDistance = 0;

        distance.forEach(element => {
            currentDistance += Number(element);
        });

        if (person.hasOwnProperty(currentName)) {

            person[currentName] += currentDistance;
        }

        line = data.shift();
    }
    let sortedPerson = Array.from(Object.entries(person)).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedPerson[0][0]}`);
    console.log(`2nd place: ${sortedPerson[1][0]}`);
    console.log(`3rd place: ${sortedPerson[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)