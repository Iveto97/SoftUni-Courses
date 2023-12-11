import { get } from "./requester.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { userData } from "./userHelp.js";
import { onDelete } from "./delete.js";

const main = document.querySelector('main');
let id = null;

export async function onMore(event) {
    id = event.params.id;
    const data = await get(`data/facts/${id}`);

    const isUser = userData.getUserData();
    let isOwner = null;
    let userId = null;
    if(isUser) {
        isOwner = userData.getUserId() === data._ownerId;
        userId = userData.getUserId();
    }
    

    const likes = await get(`data/likes?where=factId%3D%22${id}%22&distinct=_ownerId&count`);
    const isLiked = await get(`data/likes?where=factId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);

    const details = detailsTemp(data, isOwner, isUser, likes, isLiked);
    render(details, main);

}

function detailsTemp(info, isOwner, isUser, like, isLiked) {
    return html `
         <!-- Details page -->
         <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${info.imageUrl}" alt="example1" />
            <p id="details-category">${info.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                    <p id="description">${info.description}</p>
                   <p id ="more-info">${info.moreInfo}</p>
              </div>
              <h3>Likes:<span id="likes">${like}</span></h3>
              <div id="action-buttons">
                ${isOwner ? html `
                    <a href="/edit/${id}" id="edit-btn" >Edit</a>
                    <a href="/delete/${id}" id="delete-btn">Delete</a>`: !isOwner && isUser && isLiked == 0 ? html `<a href="/like/${id}" id="like-btn">Like</a>` : ''}
                    </div>
                </div>
            </div>
        </section>
    `
}