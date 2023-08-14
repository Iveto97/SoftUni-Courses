function requiredReading(numbOfPages, pagesReadIn1Hour, numberOfDays) {
    let totalTime, hoursPerDay;

    totalTime = numbOfPages / pagesReadIn1Hour;
    hoursPerDay = totalTime / numberOfDays;
    console.log(hoursPerDay);
}

requiredReading(212,20 ,2)
requiredReading(432,15 ,4)