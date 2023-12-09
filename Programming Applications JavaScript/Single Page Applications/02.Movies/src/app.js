import {hideEl} from './hideElements.js';
import { userData } from "./userHelper.js";
import { onRegister } from "./register.js";
import { loginFunc } from './login.js';
import { logoutFunc } from './logoutView.js';
import { showHome } from './homeView.js';

const guests = document.querySelectorAll('.guest');
const users = document.querySelectorAll('.user');
const navGuest = document.querySelectorAll('nav.navbar a');

const movieBtn = document.querySelector('a[class="navbar-brand text-light"]');
movieBtn.addEventListener('click', onClickMovie);

const registerBtn = navGuest[4];
registerBtn.addEventListener('click', onRegister);

const loginBtn = navGuest[3];
loginBtn.addEventListener('click', loginFunc);

const logoutBtn = navGuest[2];
logoutBtn.addEventListener('click', logoutFunc);

hideEl();

export function updateNav() {
    const userInfo = userData.getUserData();
    if (userInfo) {
        users.forEach(user => user.style.display = 'inline');
        guests.forEach(guest =>  guest.style.display = 'none');

        const email = document.getElementById('welcome-msg');
        email.textContent = (`Welcome, ${userInfo.email}`);
    } else {
        users.forEach(user => user.style.display = 'none');
        guests.forEach(guest =>  guest.style.display = 'inline');
    }
}

updateNav();

function onClickMovie(event) {
    event.preventDefault();
    showHome()
}

showHome()

  