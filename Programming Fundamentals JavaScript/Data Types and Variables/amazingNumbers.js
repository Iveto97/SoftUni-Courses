function amazingNumbers(numb) {
    let numbToStr, sum, result;
    numbToStr = numb.toString();
    sum = 0;
    for (i = 0; i < numbToStr.length; i++) {
        sum += Number(numbToStr[i]);
    }
    result = sum.toString();

    result.includes(`9`) ?
        console.log(`${numb} Amazing? True`) :
        console.log(`${numb} Amazing? False`);

}

amazingNumbers(1233)
amazingNumbers(999)