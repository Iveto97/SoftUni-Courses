import { userData } from "../userData.js";

export async function onLogout(ctx) {
    await ctx.get('users/logout');
    userData.clearUserData();
    ctx.goTo('/');
    
}