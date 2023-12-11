import { html, render } from "../node_modules/lit-html/lit-html.js";
import { get } from "./requester.js";

const main = document.querySelector('main#content');

export async function dashboard() {
    const data = await get('data/facts?sortBy=_createdOn%20desc');
    const dash = createCard(data);
    render(dash, main)
}

function createCard(data) {
    return html `
        <h2>Fun Facts</h2>
        <section id="dashboard">
            ${data.length == 0 ? html `<h2>No Fun Facts yet.</h2>` : data.map((element) => html `  
            <div class="fact" >
                <img src="${element.imageUrl}" alt="example1" />
                <h3 class="category">${element.category}</h3>
                <p class="description">${element.description}</p>
                <a class="details-btn" href="/details/${element._id}">More Info</a>
            </div> `)}
        </section> 
    `
}
