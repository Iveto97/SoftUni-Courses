function addItem() {
    const newText = document.querySelector('#newItemText');
    const newValue = document.querySelector('#newItemValue');
    const btn = document.querySelector('input[type=button]');
    const menu = document.querySelector('#menu');

    const textValue = document.querySelector('#newItemText').value;
    const value = document.querySelector('#newItemValue').value;

    let text = `${textValue} ${value}`;
    btn.addEventListener('click', addOption(text));

    function addOption(text) {
        const newEl = document.createElement('option');
        newEl.textContent = text;
        menu.appendChild(newEl);
    }
    newText.value = '';
    newValue.value = '';
}