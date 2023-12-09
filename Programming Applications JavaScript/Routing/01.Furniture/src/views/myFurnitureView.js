import { html, render } from "../../node_modules/lit-html/lit-html.js";

import { userData } from "../userDataHelper.js";
import { get } from "../requester.js";

const container = document.querySelector('div.container');

export async function myFurniture(event) {
    const userId = userData.getUserId()
    const data = await get(`data/catalog?where=_ownerId%3D%22${userId}%22`);

            const furn = myFurn(data);
            render(furn, container);
}

function myFurn(info) {
    return html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${info.map(item => cardTemp(item))}
        </div>
    `
}

function cardTemp(info) {
    return html `
        <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="../images/${info.img}" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>${info.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${info._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
    `
}