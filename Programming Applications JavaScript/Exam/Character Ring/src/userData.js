
// export function getUserData() {
//     JSON.parse(sessionStorage.getItem('userData'));
// }

// export function setUserData(data) {
//    sessionStorage.setItem('userData', JSON.stringify(data));
// }

// export function clearUserData() {
//    sessionStorage.removeItem('userData');
// }

// export function getUserId() {
//    JSON.parse(sessionStorage.getItem('userData'))._id;
// }

const userData = {
    getUserData: () => JSON.parse(sessionStorage.getItem('userData')),
    setUserData: (data) => sessionStorage.setItem('userData', JSON.stringify(data)),
    clearUserData: () => sessionStorage.removeItem('userData'),
    getUserId: () => JSON.parse(sessionStorage.getItem('userData'))._id
}

export { userData }
