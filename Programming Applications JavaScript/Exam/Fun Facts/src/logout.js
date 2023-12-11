import page  from '../node_modules/page/page.mjs';
import { get } from './requester.js';
import { userData } from './userHelp.js';
import { homePage } from './homeView.js';
import { updateNav } from '../app.js';



export async function onLogout() {
    await get('users/logout');
    userData.clearUserData();
    updateNav();
    page.redirect('/')
}