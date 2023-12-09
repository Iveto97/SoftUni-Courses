import { hideEl } from "./hideElements.js";
import { get } from "./requester.js";
import { userData } from "./userHelper.js";
import { addMovie } from "./addMovieView.js";
import { details } from "./detailsView.js";

const homeSection = document.querySelector('#home-page');
const movieSection = document.getElementById('movie');
const container = document.getElementById('movies-list');
const addBtn = document.getElementById('add-movie-button');
const detailsBtn = document.querySelectorAll('button.btn-info');

export async function showHome() {
    hideEl();
    homeSection.style.display = 'block';

    const isUser = userData.getUserData();

    if(isUser) {
        addBtn.style.display = 'block';
        addBtn.addEventListener('click', addMovie);
    }

    movieSection.style.display = 'block';
    const response = await get('data/movies');
    let films = '';

    response.forEach(film => {
        films += filmsTemp(film);
    });
    container.innerHTML = films;
 
    const detailsBtn = document.querySelectorAll('button.btn-info');

    if(isUser){
        detailsBtn.forEach((button) => {
            button.addEventListener('click', details);
        })
    }
}

function filmsTemp(info) {
    return `
        <li class="card mb-4">
            <img class="card-img-top" src="${info.img}" alt="Card image cap" width="400">
            <div class="card-body">
                <h4 class="card-title">${info.title}</h4>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-info" id="${info._id}">Details</button>
            </div>
        </li>
    `
}
