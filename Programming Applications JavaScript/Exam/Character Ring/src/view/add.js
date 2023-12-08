import { html } from "../../node_modules/lit-html/lit-html.js";

let context = null;
export function addView(ctx) {
    const add = addTemp();
    ctx.render(add);
    context = ctx;
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


    const response = await context.post('data/characters', data);
    context.goTo('/dashboard');
}

function addTemp() {
    return html  `
         <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Add Character</h2>
            <form class="create-form" @submit="${onSubmit}">
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
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
    `
}