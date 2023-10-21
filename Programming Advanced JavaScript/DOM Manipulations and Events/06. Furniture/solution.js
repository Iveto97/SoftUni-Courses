function solve() {
  const container = document.getElementById('exercise');

  const inputTextArea = container.getElementsByTagName('textarea')[0];
  const generateBtn = container.getElementsByTagName('button')[0];
  const tableBody = document.querySelector('table tbody');

  generateBtn.addEventListener('click', generateRow);

  function generateRow() {
    let furnitureInfo = inputTextArea.value;
    let inputObj = JSON.parse(furnitureInfo);

    inputObj.forEach(furniture => {

      const img = document.createElement('img');
      const name = document.createElement('p');
      const price = document.createElement('p');
      const factor = document.createElement('p');
      const input = document.createElement('input');

      input.type = 'checkbox';

    for (const iterator in furniture) {
      if (iterator === 'img') {
        img.src = furniture[iterator];
      } else if (iterator === 'name') {
        name.textContent = furniture[iterator];
      } else if (iterator === 'price') {
        price.textContent = furniture[iterator];
      } else if (iterator === 'decFactor') {
        factor.textContent = furniture[iterator];
      }
    }

    const row = document.createElement('tr');
    const colPic = document.createElement('td');
    const colName = document.createElement('td');
    const colPrice = document.createElement('td');
    const colFac = document.createElement('td');
    const colInput = document.createElement('td');

    colPic.appendChild(img);
    colName.appendChild(name);
    colPrice.appendChild(price);
    colFac.appendChild(factor);
    colInput.appendChild(input);

    row.appendChild(colPic);
    row.appendChild(colName);
    row.appendChild(colPrice);
    row.appendChild(colFac);
    row.appendChild(colInput);

    tableBody.appendChild(row);

    });
    
  }

  const buyBtn = container.getElementsByTagName('button')[1];

  buyBtn.addEventListener('click', finishOrder);

  function finishOrder() {
    const inputRef = Array.from(document.getElementsByTagName('input'));
    let furn = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let count = 0;
    for (const input of inputRef) {
      if (input.checked) {
        count++;
        const parentTr = input.parentElement.parentElement;
        const nameTd = parentTr.getElementsByTagName('td')[1];
        furn.push(nameTd.textContent);

        const priceTd = parentTr.getElementsByTagName('td')[2];
        totalPrice += Number(priceTd.children[0].textContent);

        const dec = parentTr.getElementsByTagName('td')[3];
        avgDecFactor += Number(dec.children[0].textContent);
      }
    }
    const outputTextArea = container.getElementsByTagName('textarea')[1];
    outputTextArea.value = `Bought furniture: ${furn.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor / count}`;

  }
}