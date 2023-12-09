import { loginFunc } from "./login.js";
import { get } from "./requester.js";
import { userData } from "./userHelper.js";
import { updateNav } from "./app.js";

export async function logoutFunc(event) {
    event.preventDefault();

    await get('users/logout');
    userData.clearUserData();
    updateNav();
    loginFunc();
}