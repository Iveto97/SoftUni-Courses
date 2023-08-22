function matchFullName(names) {
    let regex = /\b[A-Z][a-z]{2,}[ ][A-Z][a-z]{2,}\b/g;
    let validNames = [];
    let validName = null;

    while ((validName = regex.exec(names)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));

}

matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"])