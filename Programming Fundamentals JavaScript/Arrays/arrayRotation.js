function arrayRotation(array, numberOfRotations) {
    let i, num;

    for (i = 0; i < numberOfRotations; i++) {
        num = array.shift();
        array.push(num);
    }
    console.log(array.join(" "));

}

arrayRotation([51, 47, 32, 61, 21], 2);
              /*32 61  21  51  47*/
console.log("------------------");
arrayRotation([32, 21, 61, 1], 4);
             /*32  21  61  1*/
console.log("------------------");
arrayRotation([2, 4, 15, 31], 5);
             /*4  15 31  2*/