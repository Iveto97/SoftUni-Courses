import { updateNav } from "../../app.js";
import { get } from "../requester.js";
import { userData } from "../userDataHelper.js";
import { login } from "./loginView.js";

export async function logout() {
    await get('users/logout');
    userData.clearUserData();
    login();
    updateNav();
    
}