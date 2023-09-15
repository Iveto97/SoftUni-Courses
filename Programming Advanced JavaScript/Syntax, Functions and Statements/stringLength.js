function stringLength(str1, str2, str3) {
    let totalSum = (str1.length + str2.length + str3.length);
    let roundedSum = Math.floor(totalSum / 3);
    console.log(totalSum);
    console.log(roundedSum);
}

stringLength('pasta', '5', '22.3');