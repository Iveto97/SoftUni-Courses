function modernTimesOfHashTag(text) {

    let textArr = text.split(' ');
    

    for (const word of textArr) {
       
        if (word[0] === '#' && word.length > 1) {

            let wordArr = word.split('');
            wordArr.shift();
            let completeWord = '';
            for (let char of wordArr) {

                if (!isNaN(char)) {
                    completeWord = '';
                    break;
                } else {
                    completeWord += char;
                };
            }
            if(completeWord.length > 0) {
                console.log(completeWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays #everyone use#s # to tag a #special word in #socialMedia'
);