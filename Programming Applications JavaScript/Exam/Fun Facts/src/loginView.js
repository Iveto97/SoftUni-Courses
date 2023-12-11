import { homePage } from './homeView.js';
import { updateNav } from '../app.js';
import { post } from './requester.js';
import { userData } from './userHelp.js';
import { onRegister } from "./registerView.js";
import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('main');

export function onLogin() {
    const login = loginTemp();
    render(login, main);
}

async function onSubmit(event) {
    event?.preventDefault();

    const formaData = new FormData(event.target);

    const {email, password} = Object.fromEntries(formaData);

    if(!email || !password) {
      alert('All fields are require');
      return;
    }

    const data = {
        email,
        password
    }

    const response = await post('users/login', data);
    userData.setUserData(response);
    updateNav();
    homePage();
}

function loginTemp() {
    return html `
         <!-- Login Page (Only for Guest users) -->
         <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onSubmit}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#" @click=${onRegister}>Create an account</a>
              </p>
            </form>
          </div>
        </section>
    `
}