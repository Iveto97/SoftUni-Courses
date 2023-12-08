import { html } from "../../node_modules/lit-html/lit-html.js";


export async function dashboardView(ctx) {
    const data = await ctx.get('data/characters?sortBy=_createdOn%20desc');
    const dashboard = dashboardTemp(data);
    ctx.render(dashboard);
}

function dashboardTemp(characters) {
    return html `
            <h2>Characters</h2>
            <section id="characters">
                ${characters.length === 0 ?  html `<h2>No added Heroes yet.</h2>` : characters.map(character => html `
                    <div class="character">
                    <img src="${character.imageUrl}" alt="example1" />
                    <div class="hero-info">
                    <h3 class="category">${character.category}</h3>
                    <p class="description">${character.description}</p>
                    <a class="details-btn" href="/details/${character._id}">More Info</a>
                    </div>`
                )}
           </section>`
}
