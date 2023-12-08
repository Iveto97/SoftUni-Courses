import { html } from "../../node_modules/lit-html/lit-html.js";
import { userData } from "../userData.js";

let id = null;

export async function detailsView(ctx) {
    id = ctx.params.id;
    const data = await ctx.get(`data/characters/${id}`);
    let isOwner = null;
    let userId = null;

    const isUser = userData.getUserData();
    if(isUser) {
        isOwner = userData.getUserId() === data._ownerId;
        userId =  userData.getUserId();
    }
    

    const likes = await ctx.get(`data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`);

    const userLikes = await ctx.get(`data/useful?where=characterId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);

    const details = detailsTemp(data, isOwner, isUser, likes, userLikes);
    ctx.render(details);
}

function detailsTemp(data, isOwner, isUser, likes, userLikes) {
    return html `
         <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <div>
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${data.description}</p>
                   <p id ="more-info">${data.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${likes}</span></h3>
              <div id="action-buttons">
                ${isOwner && isUser ? html ` 
                        <a href="/edit/${id}" id="edit-btn">Edit</a>
                        <a href="/delete/${id}" id="delete-btn">Delete</a>
                    ` : '' } ${userLikes === 0 && isUser && !isOwner? html `<a href="/likes/${id}" id="like-btn">Like</a>` : ''}
            </div>
            </div>
        </div>
      </section>
    `
}