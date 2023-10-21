(function addSum () {
    let total = 0;

    function add(number) {
        total += number;
        return add;
    }

    add.toString = () => total;
    return add;
}());

console.log(add(4)(3));