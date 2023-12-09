const URL = 'http://localhost:3030/jsonstore/advanced/table';

export async function getData() {
    const response = await fetch(URL, {
        method: 'GET',
    })
    return response.json();
}