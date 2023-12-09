import { onClick } from "./app.js";

const URL = 'http://localhost:3030/jsonstore/collections/books/';

export async function getInfo() {
    const response = await fetch(URL, {
        method: 'GET'
    })

    return response.json();
}

export async function postInfo(data) {
    const response = await fetch (URL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    onClick();
}

export async function deleteInfo(id) {
    const response = await fetch(URL + id, {
        method: 'DELETE',
    })
    onClick();
}

export async function updateInfo(data, id) {
    const response = await fetch(URL + id, {
        method: 'PUT',
        
        body: JSON.stringify(data)
    })
    onClick();
}