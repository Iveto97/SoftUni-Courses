import { html, render } from "../node_modules/lit-html/lit-html.js";
import { post } from "./requester.js";
import { dashboard } from "./dashboardView.js";

const main = document.querySelector('main');

export function onAdd() {
    const add = addTemp();
    render(add, main);
}

function addTemp() {
    return html`
    <section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input type="text" name="category" id="category" placeholder="Category"/>
              <input type="text" name="image-url" id="image-url" placeholder="Image URL"/>
              <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50"></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
    `
}

async function onSubmit(event) {
    event?.preventDefault();

    const formData = new FormData(event.target);
    const category = formData.get('category');
    const imageUrl = formData.get('image-url');
    const description = formData.get('description');
    const moreInfo = formData.get('additional-info');

    if(!category || !imageUrl || !description || !moreInfo) {
      alert('All input fields are require');
      return;
    }

    const data = {
      category,
      imageUrl,
      description,
      moreInfo
    }

    const res = await post('data/facts', data);

    dashboard();
}