import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";


import { userData } from "../userDataHelper.js";
import { post } from "../requester.js";
import { updateNav } from "../../app.js";

const container = document.querySelector('div.container');

export function login() {
    const loginForm = loginTemp();
    render(loginForm, container);
}

async function onLogin(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const {email, password} = Object.fromEntries(formData);
    const pathName = 'users' + location.pathname;

    const data = {
        email,
        password
    }

    const response = await post(pathName, data);
    userData.setUserData(response);
    
    updateNav();
    page.redirect('/');
}

function loginTemp() {
    return html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onLogin}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    `
}