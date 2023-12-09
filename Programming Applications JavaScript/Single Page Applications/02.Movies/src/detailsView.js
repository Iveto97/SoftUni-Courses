import { userData } from "./userHelper.js";
import { hideEl } from "./hideElements.js";
import { get, del, post } from "./requester.js";
import { onEdit} from "./editView.js";
import { showHome } from "./homeView.js";

const detailsRef = document.getElementById('movie-example');
const header = document.querySelector('div.text-dark h1');
const image = document.querySelector('img.img-thumbnail');
const desPara = document.querySelector('div.col-md-4 p');

const deleteBtn = document.querySelector('.btn-danger');
deleteBtn.addEventListener('click', onDelete);

const editBtn = document.querySelectorAll('a.btn-warning')[1];
editBtn.addEventListener('click', onEdit)

const likeBtn = document.querySelectorAll('.btn-primary')[1];
likeBtn.addEventListener('click', onLike);

const likes = document.querySelector('.enrolled-span');

let isOwner = null;
let id = null;
export async function details(event) {
    event?.preventDefault();
    hideEl();
    detailsRef.style.display = 'block';

    id = event.target.id;
    const response = await get(`data/movies/${id}`);

    header.textContent = `Movie title: ${response.title}`;
    image.src = `${response.img}`;
    desPara.textContent = `${response.description}`;

    isOwner = userData.getUserId() === response._ownerId;

    if(isOwner) {
        deleteBtn.style.display = 'inline';
        editBtn.style.display = 'inline';
        editBtn.setAttribute('id', id);
        likeBtn.style.display = 'none';
        likes.style.display = 'none';
    } else {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        likeBtn.style.display = 'inline';
        likes.style.display = 'none';
    }

}


async function onLike() {
    const userId = userData.getUserId();
    const isLiked =  await get(`data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);

    if (!isOwner && isLiked.length < 1) {
        await post('data/likes', { movieId: id });
        const res = await get(`data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
        likes.textContent = `Liked ${res}`;
        likes.style.display = 'inline';
        likeBtn.style.display = 'none';
    } else if(!isOwner && isLiked.length > 1) {
        const res = await get(`data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    
        likes.textContent = `Liked ${res}`;
        likes.style.display = 'inline';
        likeBtn.style.display = 'none';
    }

    
}


async function onDelete() {
    if(isOwner) {
        await del(`data/movies/${id}`);
        showHome();
    }
}