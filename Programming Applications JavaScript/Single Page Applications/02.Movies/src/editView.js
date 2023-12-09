
import { hideEl } from "./hideElements.js";
import { get, put } from "./requester.js";
import { showHome } from "./homeView.js";
// import { details } from "./detailsView.js";

const editRef = document.getElementById('edit-movie');
let id = null;
export async function onEdit(event) {
    hideEl();
    editRef.style.display = 'block';

    id = event.target.id;

    const response = await get(`data/movies/${id}`);
    
    const titleEdit = document.querySelectorAll('input#title')[1];
    titleEdit.value = response.title;

    const des = document.querySelectorAll('textarea.form-control')[1];
    des.textContent = response.description;

    const imgEdit = document.querySelectorAll('input#imageUrl')[1];
    imgEdit.value = response.image;
    
    const form = document.querySelectorAll('form')[1];
    form.addEventListener('submit', onSubmit)
}


async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const {title, description, img} = Object.fromEntries(formData);

    await put(`data/movies/${id}`, {title, description, img, id});
    // details();
    showHome();
}