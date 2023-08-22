function nxNMatrix(n) {
    matrix(n);
    function matrix(number) {
        let i, k, matrisStr;
        matrisStr = [];
        for (i = 0; i < number; i++) {
            for (k = 0; k < number; k++) {
                matrisStr.push(number);
            }
            console.log(matrisStr.join(" "));
            matrisStr = [];
        }
    }
}

nxNMatrix(3);
console.log("-------------------");
nxNMatrix(7);
console.log("-------------------");
nxNMatrix(2);