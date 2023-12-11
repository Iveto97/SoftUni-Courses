import  page  from '../node_modules/page/page.mjs';

import { render, html } from "../node_modules/lit-html/lit-html.js";
import { get, put } from "./requester.js";

const main = document.querySelector('main');
let id = null;

export async function onEdit(event) {
    id = event.params.id;

    const edit = editTemp();
    render(edit, main);

    const response = await get(`data/facts/${id}`);

    const category = document.getElementById('category');
    category.value = response.category;

    const imageUrl = document.getElementById('image-url');
    imageUrl.value = response.imageUrl;

    const description = document.getElementById('description');
    description.value = response.description;

    const moreInfo = document.getElementById('additional-info');
    moreInfo.value = response.moreInfo;
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

    const res = await put(`data/facts/${id}`, data);

    page.redirect(`/details/${id}`)
}


function editTemp() {
    return html `
        <section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form class="edit-form" id="${id}" @submit=${onSubmit}>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
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
            rows="10"
            cols="50"
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>
    
    `
}