function attachEvents() {
    const baseURI = 'http://localhost:3030/jsonstore/phonebook/';

    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', onLoad);

    const ulPhoneBook = document.getElementById('phonebook');
    const personInputRef = document.getElementById('person');
    const phoneInputRef = document.getElementById('phone');

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', onCreate);

    async function onLoad(){
        ulPhoneBook.innerHTML = '';

        const response = await fetch(baseURI);
        const phoneBookData = await response.json();
        Object.values(phoneBookData).forEach(element => {

            const id = element._id;

            const listItem = document.createElement('li');
            listItem.textContent = `${element.person}: ${element.phone}`;
            listItem.setAttribute('id', id);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', onDelete)

            listItem.appendChild(deleteBtn);
            ulPhoneBook.appendChild(listItem);
        });
        
    }

    async function onDelete(e) {
        
        const id = e.currentTarget.parentElement.id;

        const response = await fetch(baseURI + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        ulPhoneBook.innerHTML = '';
        onLoad();
    }

    async function onCreate() {
        const person = personInputRef.value;
        const phone = phoneInputRef.value;

        const response = await fetch(baseURI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone
            })
        })
        
        personInputRef.value = '';
        phoneInputRef.value = '';
    }
}

attachEvents();