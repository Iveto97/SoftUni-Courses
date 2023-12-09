import { html, render } from "../../node_modules/lit-html/lit-html.js";

import { get } from "../requester.js";
import { userData } from "../userDataHelper.js";

const container = document.querySelector('div.container');

export async function details(event) {
    const id = event.params.id;

    const data = await get(`data/catalog/${id}`);
    const isOwner = userData.getUserId() === data._ownerId;

    const detail = detailsTemp(data, isOwner);
    render(detail, container);
}

function detailsTemp(data, isOwner) {
    return html `
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Furniture Details</h1>
                </div>
            </div>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="card text-white bg-primary">
                        <div class="card-body">
                            <img src="../../${data.img}" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p>Make: <span>${data.make}</span></p>
                    <p>Model: <span>${data.model}</span></p>
                    <p>Year: <span>${data.year}</span></p>
                    <p>Description: <span>${data.description}</span></p>
                    <p>Price: <span>${data.price}</span></p>
                    <p>Material: <span>${data.material}</span></p>
                    <div>
                        ${isOwner ? html `
                        <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                        <a href="/delete/${data._id}" class="btn btn-red">Delete</a> ` : ''}
                        
                    </div>
                </div>
            </div>
        </div>

    `
}