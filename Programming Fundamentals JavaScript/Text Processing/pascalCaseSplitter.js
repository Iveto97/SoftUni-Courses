function pascalCaseSplitter(text) {

    let textArr = [];
    i = 0;
    for (let index = 1; index <= text.length + 1; index ++) {
        
        if(text.charCodeAt(index) >= 65 && text.charCodeAt(index) <= 90) {
            textArr.push(text.substring(i, index));
            i = index;
        }
    }
    textArr.push(text.substring(i, text.length));
    console.log(textArr.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');