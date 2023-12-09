import { html, render } from "../../node_modules/lit-html/lit-html.js";

let context = null;

export function onSearch(ctx) {
    context = ctx;
    const search = searchTemp();
    ctx.render(search);
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);
    const query = Object.fromEntries(formData);

    const response = await context.get(`data/fruits?where=name%20LIKE%20%22${query.search}%22`);

    let res = '';
    if(response.length == 0) {
        res = html ` <p class="no-result">No result.</p>`
    } else {
        res = html  `
            ${response.map((fruit) => {
                return html ` 
                <div class="fruit">
                <img src="${fruit.imageUrl}" alt="example1" />
                <h3 class="title">${fruit.name}</h3>
                <p class="description">${fruit.description}</p>
                <a class="details-btn" href="/details/${fruit._id}">More Info</a>
                </div>`
            })}
        `
    }
    const divRes = document.querySelector('div.searchResult');
    render(res, divRes);
}

function searchTemp() {
    return html ` 
       <section id="search">
            <div class="form">
                <h2>Search</h2>
                <form class="search-form" @submit="${onSubmit}">
                    <input
                    type="text"
                    name="search"
                    id="search-input"
                    />
                    <button class="button-list">Search</button>
                </form>
            </div>
            <h4>Results:</h4>
            <div class="searchResult">
            </div> 
        </section>
    `
}