function sortAnArrayByTwoCriteria(arrayOfStrings) {
    let sortAlphabetical, sortLength;
    sortAlphabetical = arrayOfStrings.sort();
    sortLength = sortAlphabetical.sort(((a, b) => a.length - b.length));

    console.log(sortLength.join("\n"))
}

sortAnArrayByTwoCriteria(['alpha','beta','gamma']);
console.log("---------------------");
sortAnArrayByTwoCriteria(['Isacc','Theodor','Jack','Harrison','George']);