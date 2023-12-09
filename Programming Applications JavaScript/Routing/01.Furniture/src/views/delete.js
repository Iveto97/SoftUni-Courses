import page from "../../node_modules/page/page.mjs";

import { del } from "../requester.js";

export async function deleteItem(event) {
    const id = event.params.id;

    await del(`data/catalog/${id}`);
    page.redirect('/');
}