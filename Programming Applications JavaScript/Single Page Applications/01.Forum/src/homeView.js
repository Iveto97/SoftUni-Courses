import { showDetails } from "./detailView.js";

const baseURI = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const main = document.querySelector('main');
const topicContent = document.querySelector('div.topic-title');
const section = document.querySelector('div.new-topic-border');

const form = document.querySelector('form');

const cancelBtn = document.querySelector('button.cancel');
cancelBtn.addEventListener('click', onCancel);


const postBtn = document.querySelector('button.public');
postBtn.addEventListener('click', onPost);

// section.remove();

export async function showHome(event) {
    event?.preventDefault(); //if have event then preventDefault (event && event.preventDefault())

    topicContent.innerHTML = '';
    const topics = await getAllTopic();

    Object.values(topics).forEach(topic => {
        const temp = createTemplate(topic);
        topicContent.appendChild(temp);
    })

    const a = topicContent.querySelectorAll('a.normal');
    a.forEach(element => {
        element.addEventListener('click', showDetails);
    })
    main.replaceChildren(section);
    main.appendChild(topicContent);
}

function createTemplate(topic) {
    const date = new Date(topic.createDate).toISOString();
    const div = document.createElement('div');
    div.setAttribute('class', 'topic-container');
    div.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal" data-id = ${topic._id}>
                <h2>${topic.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    return div;
}

function onPost(event) {
    event?.preventDefault();
    
    const formData = new FormData(event.target.parentNode.parentElement);
  
    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');
    const createDate = new Date().getTime();

    createTopic({topicName, username, postText, createDate});
    
}

async function getAllTopic(event) {
    event?.preventDefault();
    const response = await fetch(baseURI);
    const data = await response.json();
    return data;
}

async function createTopic(data) {
    const response = await fetch(baseURI, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    onCancel();
    showHome();
}

function onCancel(event) {
    event?.preventDefault();
    form.reset();
}