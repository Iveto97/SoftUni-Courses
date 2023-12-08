import { html } from "../../node_modules/lit-html/lit-html.js";

import { userData  } from "../userData.js";

let context = null;
export function registerView (ctx) {
    const register = registerTemp();
    ctx.render(register);
    context = ctx;
}

function registerTemp() {
    return html `
        <section id="register">
          
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
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
            <img class="border" src="./images/border.png" alt="">
          </div>
         
        </section>
    `
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPass = formData.get("re-password");

    if(!email || !password || !repeatPass) {
        alert('All fields are required');
        return;
    }

    if(password !== repeatPass) {
        alert('Password must be like rePass');
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

