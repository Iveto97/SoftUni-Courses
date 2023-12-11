import { userData } from './src/userHelp.js';
import { onRegister } from './src/registerView.js';
import { onLogin } from './src/loginView.js';
import { onLogout } from './src/logout.js';
import  page  from './node_modules/page/page.mjs';
import { homePage } from "./src/homeView.js";
import { dashboard } from "./src/dashboardView.js";
import { onAdd } from "./src/addView.js";
import { onMore } from './src/detailsView.js';
import { onEdit } from './src/editView.js';
import { onDelete } from './src/delete.js';
import { like } from './src/likes.js';

page('/', homePage);
page('/dashboard', dashboard);
page('/add', onAdd);
page('/logout', onLogout);
page('/login', onLogin);
page('/register', onRegister);
page('/edit/:id', onEdit);
page('/delete/:id', onDelete);
page('/details/:id', onMore);
page('/like/:id', like);



page();

const users = document.querySelectorAll('div.user a');
const guests = document.querySelectorAll('div.guest a');

export function updateNav() {
    const isUser = userData.getUserData();
    if(isUser) {
        users.forEach(user => user.style.display = 'inline');
        guests.forEach(guest => guest.style.display = 'none');
    } else {
        users.forEach(user => user.style.display = 'none');
        guests.forEach(guest => guest.style.display = 'inline');
    }
    
}

updateNav();


