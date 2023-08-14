function dayOfWeek(numb) {
    let days;
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (numb <= 7) {
        console.log(days[numb - 1]);
    } else {
        console.log("Invalid day!");
    }
}

dayOfWeek(3)
console.log("------------------");
dayOfWeek(6)
console.log("------------------");
dayOfWeek(11)