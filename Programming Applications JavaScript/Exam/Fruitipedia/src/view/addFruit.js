import { html } from "../../node_modules/lit-html/lit-html.js";

let context = null;
export function onAdd(ctx) {
    context = ctx;
    const add = addTemplate();
    ctx.render(add);
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if(!data.name || !data.imageUrl || !data.description || !data.nutrition) {
        alert('Please fill in all fields');
        return;
    }

    const response = await context.post('data/fruits', data);
    context.goTo('/dashboard');
}

function addTemplate() {
    return html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit="${onSubmit}">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
    
    `
}