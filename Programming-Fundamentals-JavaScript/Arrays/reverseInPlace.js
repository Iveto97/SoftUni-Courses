function reverseInPlace(arrayOfStrings) {
    let i, firstEl, secondEl;

    for (i = 0; i < arrayOfStrings.length / 2; i++) {
        firstEl = arrayOfStrings[i];
        secondEl = arrayOfStrings.length - 1 - i;
        arrayOfStrings[i] = arrayOfStrings[secondEl];
        arrayOfStrings[secondEl] = firstEl;
    }
    console.log(arrayOfStrings.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'] )
console.log("------------------");
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'] )
console.log("------------------");
reverseInPlace(['33', '123', '0', 'dd'])