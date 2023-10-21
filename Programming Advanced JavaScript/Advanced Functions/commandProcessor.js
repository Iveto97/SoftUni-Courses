function solution() {
    let res = '';

    return {
        append: (str) => res += str,
        removeStart: (num) => (res = res.substring(num)),
        removeEnd: (num) => res = res.substring(0 , res.length - num),
        print: () => console.log(res)
    }

}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

//append(string) - append the given string at the end of the internal string
//removeStart(n) - remove the first n characters from the string, n is an integer
//removeEnd(n) - remove the last n characters from the string, n is an integer
//print - print the stored string on the console