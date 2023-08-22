function matchPhoneNumber(numbers) {
    let regex = /(?<!\d)[+]359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let validPhones = [];
    let validPhone = null;

    while((validPhone = regex.exec(numbers)) !== null) {
        validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
)