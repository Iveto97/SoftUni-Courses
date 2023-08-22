function login(input) {
    let username, reversedUsername, index, len, i, name, count, flag;
    username = input[0];
    index = 1;
    count = 0;
    flag = false;
    while (username !== reversedUsername) {
        name = input[index];
        len = name.length;
        reversedUsername = ``;
        for (i = len; i >= 0; i--) {
            reversedUsername += `${name.charAt(i)}`;
        }
        index++;
        count++;
        if (username === reversedUsername) {
            console.log(`User ${username} logged in.`);
        } else if (count === 4) {
            console.log(`User ${username} blocked!`);
            flag = true;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        if (flag) {
            break;
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])