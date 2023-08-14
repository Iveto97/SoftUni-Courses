function rightPlace(firstStr, char, secondStr) {
    let str;
    str = firstStr.replace(`_`, char);
    str === secondStr ? console.log("Matched") : console.log("Not Matched");
}

rightPlace('Str_ng', 'I','Strong' )
rightPlace('Str_ng', 'i','String')