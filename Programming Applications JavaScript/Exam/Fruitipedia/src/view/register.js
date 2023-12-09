import { html } from "../../node_modules/lit-html/lit-html.js";

import { userData } from "../userData.js";

let context = null;
export function onRegister(ctx) {
    context = ctx;
    const register = registerTemp();
    ctx.render(register);
}

function registerTemp() {
    return html`
         <!-- Register Page (Only for Guest users) -->
         <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit="${onSubmit}">
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
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
    `
}


async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData);
    const rePassword = formData.get('re-password') ;
debugger
    if(!email || !password || !rePassword) {
        alert('One of the input field is empty');
        return;
    }

    if(password !== rePassword){
        alert('Password is different from repeat password');
        return;
    }

    const data = {
      email,
      password
    }

    const response = await context.post('users/register', data);
    userData.setUserData(response);
    context.goTo('/');
}