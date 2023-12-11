import page  from '../node_modules/page/page.mjs';

import { userData } from "./userHelp.js";
import { post } from './requester.js';
import { homePage } from './homeView.js';
import { updateNav } from '../app.js';
import { onLogin } from './loginView.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('main');

export function onRegister() { 
    const reg = registerTemp();
    render(reg, main);
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');

    if(!email || !password || !rePassword) {
        alert('One of the input fields is empty');
        return;
    }

    if(password !== rePassword) {
        alert('Password is different from repeat password');
        return;
    }

    const data = {
        email,
        password
    }

    const response = await post('users/register', data);
    userData.setUserData(response);
    updateNav();
    homePage();
}


function registerTemp() {
    return html`
         <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onSubmit}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#" @click=${onLogin}>Login</a></p>
            </form>
          </div>
        </section>
    `


}