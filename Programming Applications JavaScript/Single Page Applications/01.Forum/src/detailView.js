const baseURI = 'http://localhost:3030/jsonstore/collections/myboard/posts/';
const commentURI = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const main = document.querySelector('main');
const divTopicRef = document.querySelector('div.new-topic-border');
const divTitleRef = document.querySelector('div.topic-title');
const commentContainer = document.querySelector('div.comment');
const container = document.querySelector('div.container');

let id = '';
export async function showDetails(event) {
    event?.preventDefault();
    main.innerHTML = '';
    divTopicRef.remove();
    divTitleRef.remove();

    id = event ? event.target.parentElement.dataset.id : id;
    const topic = await getTopic(id);

    const div = document.createElement('div');
    div.setAttribute('class', 'comment');

    const topicElement = createTemplate(topic);
    div.appendChild(topicElement);
    main.appendChild(div);

    const divComForm = document.createElement('div');

    const comForm = commentForm();
    main.appendChild(comForm);

    const postBtn = document.querySelector('form button');
    postBtn.addEventListener('click', onPost);

    const userComment = document.createElement('div');
    userComment.setAttribute('class', 'user-comment');

    const comments = await getComment();
    comments.forEach(comment => {
        const templateCom =  createComment(comment);
        userComment.appendChild(templateCom);
    })

    div.appendChild(userComment);
}

async function getTopic(id) {
    const response = await fetch(baseURI + id);
    const data = await response.json();

    return data;
}

async function getComment() {
    const response = await fetch(commentURI);
    const data = await response.json();
    return Object.values(data).filter(x => x._topicId === id);
}

async function onPost(event) {
    event?.preventDefault();

    const form = event.currentTarget.parentElement;
    const formData = new FormData(form);
    const postText = formData.get('postText');
    const username = formData.get('username');
    const createDate = new Date().getTime();

    const response = await fetch(commentURI, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            postText,
            username,
            _topicId: id,
            createDate
        })
    })
    form.reset();
    showDetails();
}

function createTemplate (topic) {
    const date = new Date(topic.createDate);
    const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const div = document.createElement('div');
    div.setAttribute('class', 'header');

   div.innerHTML = `
        <img src="./static/profile.png" alt="avatar">
        <p><span>${topic.username}</span> posted on <time>${dateStr}</time></p>

        <p class="post-content">${topic.postText}</p>
    `;

    return div;
}

function createComment(data) {
    const div = document.createElement('div');
    div.setAttribute('class', 'topic-name-wrapper');
    const date = new Date(data.createDate);
    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    div.innerHTML = `
        <div class="topic-name">
            <p><strong>${data.username}</strong> commented on <time>${dateStr}</time></p>
            <div class="post-content">
                <p>${data.postText}</p>
            </div>
        </div>`;

    return div;
}

function commentForm() {
    const div = document.createElement('div');
    div.setAttribute('class', 'answer-comment');
    div.innerHTML =`
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>`;

        return div;
}