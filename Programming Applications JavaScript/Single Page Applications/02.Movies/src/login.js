import {hideEl} from './hideElements.js';
import { post } from "./requester.js";
import { userData } from "./userHelper.js";
import { updateNav } from "./app.js";
import { showHome } from "./homeView.js";


export function loginFunc() {
    hideEl();
    const loginForm = document.getElementById('form-login')

    loginForm.style.display = 'block';

    const form = document.getElementById('login-form');
    form.addEventListener('submit', onLogin);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData);

    const data = {
        email,
        password
    }

    const response = await post('users/login', data);
    userData.setUserData(response);

    updateNav();
    showHome();
}