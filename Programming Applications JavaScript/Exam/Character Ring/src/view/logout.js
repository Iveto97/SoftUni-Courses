
import { userData } from "../userData.js";

export async function logout(ctx) {
     await ctx.get('users/logout');
     userData.clearUserData();
     ctx.goTo('/');
    
}