function solve() {
  const inputText = document.getElementById('input').value;
  let sentences = inputText.split('.').filter((sent) => sent.length > 0);
  let paraOfSentences = [];
   
  for (let index = 0; index < sentences.length; index++) {
    let sentence = sentences[index];
    if(sentence.length > 0){
    if(index % 3 === 0 && index != sentence.length - 1) {
      paraOfSentences.push(`<p>${sentence}.`);
    } else if (index % 3 === 1 && index != sentence.length - 1) {
      paraOfSentences.push(`${sentence}.`);
    } else if (index % 3 === 2 && index != sentence.length - 1) {
      paraOfSentences.push(`${sentence}.</p>`);
    } else {
      if((index % 3 === 0) && index === sentence.length - 1) {
        paraOfSentences.push(`<p>${sentence}.</p>`);
      } else {
        paraOfSentences.push(`${sentence}.</p>`);
      }
    }
  }
}
 document.getElementById('output').innerHTML = paraOfSentences.join('');
}