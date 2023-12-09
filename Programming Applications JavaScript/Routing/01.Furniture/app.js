import page from "./node_modules/page/page.mjs";
// import { html, render } from "./node_modules/page/page.mjs";

import { catalog } from "./src/views/catalogView.js";
import { create } from "./src/views/createView.js";
import { dashboard } from "./src/views/dashboardView.js";
import { details } from "./src/views/detailsView.js";
import { edit } from "./src/views/editView.js";
import { logout } from "./src/views/logoutView.js";
import { login } from "./src/views/loginView.js";
import { myFurniture } from "./src/views/myFurnitureView.js";
import { register } from "./src/views/registerView.js";
import { deleteItem } from "./src/views/delete.js";
import { userData } from "./src/userDataHelper.js";
// import { html } from "lit-html";

// const container = document.querySelector('div.container');
const guest = document.getElementById('guest');
const user = document.getElementById('user');

// page(updateCTX);
page('/', catalog);
page('/catalog', catalog);
page('/create', create);
page('/dashboard', dashboard);
page('/details', details);
page('/edit', edit);
page('/logout', logout);
page('/login', login);
page('/myFurniture', myFurniture);
page('/register', register);
page('/details/:id', details);
page('/edit/:id', edit);
page('/delete/:id', deleteItem);

updateNav();

page.start();

// function updateCTX(ctx, next) {
//     ctx.html = html;
//     ctx.render = renderer;
//     ctx.updateNav = updateNav;
//     ctx.goTo = goTo;
//     next();
// }

// function goTo(path) {
//     page.redirect(path)
// }

// function renderer(temp) {
//     render(temp, container);
// }

export function updateNav() {
    const userInfo = userData.getUserData();

    if (userInfo) {
        user.style.display = 'inline';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = 'inline';
    }
}