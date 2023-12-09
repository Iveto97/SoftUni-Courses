import { html } from "../../node_modules/lit-html/lit-html.js";


export async function onDashboard(ctx) {

    const data = await ctx.get('data/fruits?sortBy=_createdOn%20desc');
    const dashboard = dashboardTemp(data);
    ctx.render(dashboard);
}


function dashboardTemp(info) {
    return html`
        <h2>Fruits</h2>
        <section id="dashboard"> 
            ${info.length === 0 ? html `<h2>No fruit info yet.</h2>` : info.map(fruit => html `
            <div class="fruit">
            <img src="../../${fruit.imageUrl}" alt="example1" />
            <h3 class="title"> ${fruit.name}</h3>
            <p>${fruit.description}</p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          </div>`)}
        </section>
    `
}
