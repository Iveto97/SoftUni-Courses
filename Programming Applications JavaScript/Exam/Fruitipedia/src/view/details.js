import { html } from "../../node_modules/lit-html/lit-html.js";
import { userData } from "../userData.js";

let id = null;
export async function onDetails(ctx) {
    id = ctx.params.id;
    debugger
    const data = await ctx.get(`data/fruits/${id}`);


    const isUser = userData.getUserData();
    let user = null;
    if(isUser) {
       user = userData.getUserId() === data._ownerId;
    }
    
    const details = detailsTemp(data, user);
    ctx.render(details);
}

function detailsTemp(info, isUser) {
    return html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${info.imageUrl}" alt="example1" />
            <p id="details-title">${info.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${info.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${info.nutrition}</p>
              </div>
              ${isUser ? html `
                <div id="action-buttons">
                    <a href="/edit/${id}" id="edit-btn">Edit</a>
                    <a href="/delete/${id}" id="delete-btn">Delete</a>
                </div>
              ` : ''}
            </div>
        </div>
      </section>
    `
}