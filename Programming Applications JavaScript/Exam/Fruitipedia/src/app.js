import { render } from "../node_modules/lit-html/lit-html.js";
import  page  from "../node_modules/page/page.mjs";

import { homePage } from './view/home.js';
import { onLogin } from "./view/login.js";
import { onRegister } from "./view/register.js";
import { onLogout } from "./view/logout.js";
import { onDashboard } from "./view/dashboard.js";
import { onAdd } from "./view/addFruit.js";
import { userData } from './userData.js';
import { post, get, put, del } from "./request.js";
import { onDetails } from "./view/details.js";
import { onEdit } from "./view/edit.js";
import { onDelete } from "./view/delete.js";
import { onSearch } from "./view/search.js";

updateNav();

const main = document.querySelector('main');

page('/', context, homePage);
page('/login', context, onLogin);
page('/register', context, onRegister);
page('/logout', context, onLogout);
page('/dashboard', context, onDashboard);
page('/addFruits', context, onAdd);
page('/details/:id', context, onDetails);
page('/edit/:id', context, onEdit);
page('/delete/:id', context, onDelete)
page('/search', context, onSearch)

page();


function context(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav();
    ctx.post = (url, data) => post(url, data);
    ctx.get = (url) => get(url);
    ctx.put = (url, data) => put(url, data);
    ctx.del = (url) => del(url);
    ctx.goTo = (path) => goTo(path);
   
    next();
  }
  

function updateNav() {
    const userLinks = document.querySelector('div.user');
    const guestLinks = document.querySelector('div.guest');

    const isUser = userData.getUserData();

    if(isUser) {
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