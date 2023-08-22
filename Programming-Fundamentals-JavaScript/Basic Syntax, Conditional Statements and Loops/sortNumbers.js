function sortNumbers(one, two, three) {
    let a, b, c;
    a = 0;
    b = 0;
    c = 0;

    if (one >= two && one >= three) {
        a = one;
    } else if (two >= one && two >= three) {
        a = two;
    } else {
        a = three;
    }

    if (one <= two && one <= three) {
        c = one;
    } else if (two <= one && two <= three) {
        c = two;
    } else {
        c = three;
    }

    if ( one >= c && one <= a) {
        b = one;
    } else if (two >= c && two <= a) {
        b = two;
    } else {
        b = three;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

sortNumbers(15, 9, 9)
