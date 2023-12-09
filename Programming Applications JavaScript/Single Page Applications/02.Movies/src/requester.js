import { userData } from "./userHelper.js";

const baseURL = 'http://localhost:3030/';

async function requestFunc(method, url, data) {
    const option = {
        method,
        headers: {}
    }

    if(data){
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const userInfo = userData.getUserData();

    if(userInfo) {
        option.headers['X-Authorization'] = userInfo.accessToken;
    }

    try {
        const response = await fetch(baseURL + url, option);

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
    return requestFunc('GET', url);
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

// export async function getAllMovies() {

//     const movie = 'movies';
//     const response = await fetch(baseURI + movie);
//     const data = await response.json();
//     return data;
// }

// export async function register(email, password) {

//     const data = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email,
//             password
//         })
//     }
    
//     try{
//         const response = await fetch('http://localhost:3030/users/register', data);
        
//         if(response.status !== 200) {
//             throw new Error('error');
//         }
//         const userData = await response.json();
        
//         sessionStorage.setItem('email', userData.email);
//         sessionStorage.setItem('userId', userData._id);
//         sessionStorage.setItem('accessToken', userData.accessToken);

//         window.location.href = './index.html';

//     } catch(error) {
//         throw new Error('Error');
//     }
// }

// export async function logIn(email, password, userViewRef) {
//     const data = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             email,
//             password
//         })
//     }

//     try{
//         const response = await fetch('http://localhost:3030/users/login', data);

//         if(response.status !== 200) {
//             throw new Error('error');
//         }

//         const userData = await response.json();
//         sessionStorage.setItem('email', userData.email);
//         sessionStorage.setItem('userId', userData._id);
//         sessionStorage.setItem('accessToken', userData.accessToken);
      
//     } catch{
//         throw new Error('Error');
//     }

//     window.location.href = './index.html';

    
// }

// async function logoutRequest () {
// 	const response = await fetch(`http://localhost:3030/users/logout`, {
// 		method: 'get',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'X-Authorization': sessionStorage.getItem('accessToken')
// 		}
// 	})
// }

/*
· Get all movies: /data/movies (GET)

· Create movie: /data/movies (POST)

· Update movie: /data/movies/:id (PUT)

· Delete movie: /data/movies/:id (DELETE)

· Get number of likes for a movie: /data/likes?where=movieId%3D%22{movieId}%22&distinct=_ownerId&count (GET)

· Get like for a movie from specific user: /data/likes?where=movieId%3D%22{movieId}%22%20and%20_ownerId%3D%22{userId}%22 (GET)

· Add a like: /data/likes (POST)

· Revoke a like: /data/likes/:id (DELETE)
*/