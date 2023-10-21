function argumentInfo(...data) {

    let result = {};
  

    for (const element of data) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;

        }
        result[type] = result[type] + 1;
    }

    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (const [type, count] of sortedResult) {
        console.log(`${type} = ${count}`);
    }

}

argumentInfo({ name: 'bob'}, 3.333, 9.999)