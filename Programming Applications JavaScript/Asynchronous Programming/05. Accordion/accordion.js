const baseURI = 'http://localhost:3030/jsonstore/advanced/articles/list';
const detailsURI = 'http://localhost:3030/jsonstore/advanced/articles/details/';
const main = document.getElementById('main');

async function solution() {
    main.textContent = '';

    const data = await request();
    data.forEach(element => {
        const divElement = creator(element);
        main.appendChild(divElement);
    }); 

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', onLoad)
    })
}

async function request() {
    const response = await fetch(baseURI);
    const data = response.json();

    return data;
}

async function requestId(id) {
    const response = await fetch(detailsURI + id);
    const data = response.json();

    return data;
}

async function onLoad(event) {
    const btnId = event.target.getAttribute('id');
    const data = await requestId(btnId)

    const extraDiv = document.createElement('div');
    extraDiv.setAttribute('class', 'extra');

    extraDiv.innerHTML = `<p>${data.content}</p>`;

    const parentDivRef = event.target.parentElement.parentElement;
    parentDivRef.appendChild(extraDiv);
    extraDiv.style.display = 'block';

    event.target.textContent = 'Less';

    event.target.removeEventListener('click', onLoad);
    event.target.addEventListener('click', solution);
}

function creator(data) {
    const div = document.createElement('div');
    div.setAttribute('class', 'accordion');

    div.innerHTML = ` 
    <div class="head">
        <span>${data.title}</span>
        <button class="button" id="${data._id}">More</button>
    </div>`;

    return div;
}

solution();