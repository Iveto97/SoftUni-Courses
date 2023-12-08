import { userData } from './userData.js';

const host = 'http://localhost:3030/';

async function request(method, url, data ) {

    const option = {
        method,
        headers: {}
    }

    if(data) {
        option.headers['Content-Type'] = 'application.json';
        option.body = JSON.stringify(data);
    }

    const isUser = userData.getUserData();

    if(isUser) {
        option.headers['X-Authorization'] = isUser.accessToken;
    }

    try {
        const response = await fetch(host + url, option);

        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        }

        return await response.json();
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export function get(url) {
    return request('GET', url);
}

export function post(url, data) {
    return request('POST', url, data);
}

export function put(url, data) {
    return request('PUT', url, data);
}

export function del(url) {
    return request('DELETE', url);
}