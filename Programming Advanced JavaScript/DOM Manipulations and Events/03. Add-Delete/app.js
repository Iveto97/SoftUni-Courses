function addItem() {
    const inputField = document.querySelector('#newItemText');
    const unList = document.querySelector('#items');

    if (inputField.value !== '') {
        const list = document.createElement('li');
        list.textContent = inputField.value;

        const aTag = document.createElement('a');
        aTag.href = '#';

        const linkText = document.createTextNode('[Delete]');
        aTag.appendChild(linkText);

        aTag.addEventListener('click', deleteElement);

        list.appendChild(aTag);
        unList.appendChild(list);

        function deleteElement() {
            list.remove();
        }
    }
}