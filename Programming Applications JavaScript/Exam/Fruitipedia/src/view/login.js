import { html } from "../../node_modules/lit-html/lit-html.js";

import { userData } from "../userData.js";

let content = null;

export function onLogin(ctx) {
    content = ctx;
    const login = loginTemp();
    ctx.render(login);
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    if(!data.email){
        alert('The email field is empty');
        return;
    }

    if(!data.password){
        alert('The password field is empty');
        return;
    }
    const response = await content.post('users/login', data);
    userData.setUserData(response);

    content.goTo('/');

}

function loginTemp() {
    return html`
         <!-- Login Page (Only for Guest users) -->
         <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit="${onSubmit}">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register" >Create an account</a>
              </p>
            </form>
          </div>
        </section>
    `
}
