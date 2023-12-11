import  page  from '../node_modules/page/page.mjs';

import { del } from "./requester.js";
import { dashboard } from "./dashboardView.js";

export async function onDelete(event) {
    const id = event.params.id;
    const confirmed = confirm("After confirmation this fact will be deleted. Are you sure?");
    if(confirmed) {
        const res = await del(`data/facts/${id}`);
        page.redirect('/dashboard');
    }
    
}