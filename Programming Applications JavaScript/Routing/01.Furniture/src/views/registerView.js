import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { post } from "../requester.js";
import page from "../../node_modules/page/page.mjs";

import { userData } from "../userDataHelper.js";
import { updateNav } from "../../app.js";

const container = document.querySelector('div.container');

export function register() {
    const registerForm = registerTemp();
    render(registerForm, container);
}

async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const {email, password, rePass} = Object.fromEntries(formData);
    const pathName = 'users' + location.pathname;

    if (!email || !password || !rePass || password !== rePass) {
        alert('Empty field');
        return;
    }

    const data = {
        email,
        password
    }

    const response = await post(pathName, data);
    userData.setUserData(response);
    updateNav();
    
    page.redirect('/');
}


function registerTemp() {
    return html `
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    `
}