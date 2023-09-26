function timeToWalk(steps, footprint, speed) {

    let distanceInMeters = steps * footprint;
    let speedInSec = speed / 3.6;
    let time = distanceInMeters / speedInSec;
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin * 60));
    let breaks = Math.floor(distanceInMeters / 500);
    timeInMin += breaks;
    let hours = Math.floor(timeInMin / 60);

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let secToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    return `${hoursToPrint}:${minToPrint}:${secToPrint}`;
}

console.log(timeToWalk(4000, 0.60, 5));