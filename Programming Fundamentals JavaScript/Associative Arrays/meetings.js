function meetings(data) {

    let days;
    days = {};
    for (const line of data) {
        let [day, name] = line.split(" ");


        if (days.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            days[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }

    for (const [day, name] of Object.entries(days)) {
        console.log(`${day} -> ${name}`);

    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)