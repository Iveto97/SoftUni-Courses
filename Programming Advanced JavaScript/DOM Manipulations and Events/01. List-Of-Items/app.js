function addItem() {
    const inputField = document.querySelector('#newItemText');
    const list = document.querySelector('#items');

    const listChild = document.createElement('li');

    if (inputField.value !== '') {
        listChild.textContent = inputField.value;

        list.appendChild(listChild);
    }
}