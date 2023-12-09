import { hideEl } from "./hideElements.js";
import { showHome } from "./homeView.js";
import { post } from "./requester.js";

const addMovieSection = document.getElementById('add-movie');
const titleRef = document.getElementById('title');
const descriptionRef = document.querySelector('textarea[class="form-control"]');
const imgRef = document.getElementById('imageUrl');

const submitBtn = document.querySelector('button[class="btn btn-primary"]');
submitBtn.addEventListener('click', onAdd);

export function addMovie() {
    hideEl();

    addMovieSection.style.display = 'block';
}

async function onAdd(event) {
    event?.preventDefault();

    const title = titleRef.value;
    const description = descriptionRef.value;
    const img = imgRef.value;
    debugger

    if(!title) {
        alert('The title field is empty');
        return
    }

    if(!description) {
        alert('The description field is empty');
        return
    }

    if(!img) {
        alert('The image field is empty');
        return
    }

    const data = {
        title,
        description,
        img
    }

    await post('data/movies', data);
    showHome();
}