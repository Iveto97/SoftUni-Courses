import { html } from "../../node_modules/lit-html/lit-html.js";

let id = null;
let context = null;
export async function onEdit(ctx) {
    context = ctx;
    const edit = editTemp();
    ctx.render(edit);

    id = ctx.params.id;

    const data = await ctx.get(`data/fruits/${id}`);

    const name = document.getElementById('name');
    name.value = data.name;

    const imageUrl = document.getElementById('FruitImage');
    imageUrl.value = data.imageUrl;

    const description = document.getElementById('fruitDescription');
    description.textContent = data.description;

    const nutrition = document.getElementById('fruitNutrition');
    nutrition.textContent = data.nutrition;
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    if(!data.name || !data.imageUrl || !data.description || !data.nutrition) {
        alert('One of the fields is empty');
        return;
    }

    const response = await context.put(`data/fruits/${id}`, data);
    context.goTo(`/details/${id}`);
}


function editTemp() {
    return html `
        <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit="${onSubmit}">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="FruitImage"
                placeholder="Fruit Image URL"
              />
              <textarea
                id="fruitDescription"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="fruitNutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
    `
}