function evenAndOddSubtraction(arr) {
    let difference, even, odd, i, num;
    even = 0;
    odd = 0;

    for (i = 0; i < arr.length; i++) {
        num = Number(arr[i]);
        num % 2 === 0 ? even += num : odd += num;
    }
    difference = even - odd;
    console.log(difference);
}

evenAndOddSubtraction([1,2,3,4,5,6])
console.log("------------------");
evenAndOddSubtraction([3,5,7,9])
console.log("------------------");
evenAndOddSubtraction([2,4,6,8,10])