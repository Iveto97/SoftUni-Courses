import { addItem } from "./dropdown.js";

const URL = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function getAllItems() {
    const response = await fetch(URL, {
        method: 'GET'
    })
    return response.json();
}

export async function onPost(event) {
    event.preventDefault();
    const inputField = document.querySelector('input[type="text"]');

    const data = {
        'text': inputField.value
    }
    const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    if(response.status !== 200) {
        return alert(`Error status: ${response.status}`);
    }

    inputField.value = '';

    const res = await getAllItems();
    addItem(res)
}