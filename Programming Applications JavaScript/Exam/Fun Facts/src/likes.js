import page  from '../node_modules/page/page.mjs';

import { post } from "./requester.js";

export async function like(event) {
    
    const factId = event.params.id;

    const data = {
        factId
    }
    const response = await post('data/likes', data);
    console.log(response);
    page.redirect(`/details/${factId}`);
}