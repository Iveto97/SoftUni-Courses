import { userData } from "./userDataHelper.js";

const baseURL  = 'http://localhost:3030/';

async function requestFunc(method, url, data) {
    const option = {
        method,
        headers: {}
    }

    if (data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const userInfo = userData.getUserData();

    if(userInfo) {
        option.headers['X-Authorization'] = userInfo.accessToken;
    }

    try {
        const response = await fetch(baseURL + url, option);
        if (response.ok === false) {
            const error = await response.json();
            throw new Error("A user with the same email already exists");
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
    return requestFunc('GET' ,url);
}

export function post(url, data) {
    return requestFunc('POST', url, data);
}

export function put(url, data) {
    return requestFunc('PUT', url, data);
}

export function del(url) {
    return requestFunc('DELETE', url);
}