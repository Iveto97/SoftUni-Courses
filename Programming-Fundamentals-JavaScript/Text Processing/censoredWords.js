function censoredWords(text, word) {

  while (text.includes(word)) {
    let symbol = "*".repeat(word.length);
    text = text.replace(word, symbol);

  }
  console.log(text);
}

censoredWords('A small sentence with small some words',
'small')