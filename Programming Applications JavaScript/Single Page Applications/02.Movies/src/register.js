import {hideEl} from './hideElements.js';
import { post } from "./requester.js";
import { userData } from "./userHelper.js";
import { showHome } from "./homeView.js";
import { updateNav } from "./app.js";

const regSection = document.getElementById('form-sign-up');

export async function onRegister() {
    hideEl();
    regSection.style.display = 'block';
    const form = document.getElementById('register-form');
    form.addEventListener('submit', onSubmit);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password, repeatPassword} = Object.fromEntries(formData);

    if(password.length < 6) {
        alert('The password must be more than 6 characters');
        return;
    }

    if(password !== repeatPassword) {
        alert('The password and rePassword must be the same');
        return;
    }

    const data = {
        email,
        password
    }

    const res = await post('users/register', data);
    userData.setUserData(res);

    updateNav();
    showHome();
}