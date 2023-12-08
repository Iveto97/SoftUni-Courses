import page from '../node_modules/page/page.mjs'
import { render } from "../node_modules/lit-html/lit-html.js";

import { get, post, put, del } from "./request.js";

import { homeView } from './view/home.js';
import { loginView } from './view/login.js';
import { registerView } from './view/register.js';
import { logout } from './view/logout.js';
import { userData } from './userData.js';
import { dashboardView } from './view/dashboard.js';
import { addView } from "./view/add.js";
import { detailsView } from './view/details.js';
import { editView } from './view/edit.js';
import { deleteView } from './view/delete.js';
import { likes } from './view/likes.js';

const main = document.querySelector('main');

updateNav();

page('/', context, homeView);
page('/login', context, loginView);
page('/register', context, registerView);
page('/logout', context, logout);
page('/dashboard', context, dashboardView);
page('/add', context, addView);
page('/details/:id', context, detailsView);
page('/edit/:id', context, editView);
page('/delete/:id', context, deleteView);
page('/likes/:id' , context, likes)

page();

function updateNav() {
    const isUser = userData.getUserData();
    const userLinks = document.querySelector('div.user');
    const guestLinks = document.querySelector('div.guest');

    if(isUser){
        userLinks.style.display = 'inline';
        guestLinks.style.display = 'none';
    } else {
        userLinks.style.display = 'none';
        guestLinks.style.display = 'inline';
    }
}

function goTo(path) {
    page.redirect(path);
}

function context(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.goTo = (path) => goTo(path);

    ctx.updateNav = updateNav();

    ctx.get = (url) => get(url);
    ctx.post = (url, data) => post(url, data);
    ctx.put = (url, data) => put(url, data);
    ctx.del = (url) => del(url);

    next();
}