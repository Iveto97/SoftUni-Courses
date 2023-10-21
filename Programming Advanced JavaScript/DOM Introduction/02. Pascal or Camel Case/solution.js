function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const textToLowerCase = text.toLowerCase()
    .split(' ');
  let result = '';
  if (namingConvention === 'Camel Case') {
    result += textToLowerCase.shift();
    for (const word of textToLowerCase) {
      const char = word.charAt(0)
        .toUpperCase() + word.slice(1);
      result += char;
    }
  } else if (namingConvention === 'Pascal Case') {
    for (const word of textToLowerCase) {
      const char = word.charAt(0)
        .toUpperCase() + word.slice(1);
      result += char;
    }
  } else {
    result = 'Error!';
  }
  document.getElementById('result').textContent = result;
}
