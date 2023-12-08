import { html } from "../../node_modules/lit-html/lit-html.js";

let id = null;
let context = null;
export async function editView(ctx) {
    const edit = editTemp();
    ctx.render(edit);
    context= ctx;

    id = ctx.params.id;

    const data = await ctx.get(`data/characters/${id}`);

    const category = document.getElementById('category');
    category.value = data.category;

    const imageUrl = document.getElementById('image-url');
    imageUrl.value = data.imageUrl;

    const description = document.getElementById('description');
    description.textContent = data.description;

    const moreInfo = document.getElementById('additional-info');
    moreInfo.textContent = data.moreInfo;
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);
   
    const category =  formData.get("category").trim();
    const imageUrl =  formData.get("image-url").trim();
    const description =  formData.get("description").trim();
    const moreInfo =  formData.get("additional-info").trim();

    if(!category || !imageUrl || !description || !moreInfo) {
        alert('All fields are required');
        return;
    }

    const data = {
        category,
        imageUrl, 
        description, 
        moreInfo
      }

    const response = await context.put(`data/characters/${id}`, data);
    context.goTo(`/details/${id}`);
}

function editTemp() {
    return html `
        <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form class="edit-form" @submit='${onSubmit}'>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          ></textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
    
    `
}