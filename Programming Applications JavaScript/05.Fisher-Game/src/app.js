const URI = 'http://localhost:3030/users/';
const catchesURI = 'http://localhost:3030/data/catches/';

const endpoints = {
    logout: 'logout',
}

const loadBtn = document.querySelector('button.load');
loadBtn.addEventListener('click', onLoadAllCatches);

const formD = document.querySelector('form');
formD.addEventListener('submit', onCreateCatches);

const loginBtnRef = document.getElementById('login');
const registerBtnRef = document.getElementById('register');
const logoutBtnRef = document.getElementById('logout');
const userNameRef = document.querySelector('.email span');
const catchesRef = document.getElementById('catches');
const addCatchesBtn = document.querySelector('#addForm button');



catchesRef.innerHTML = '';

logoutBtnRef.addEventListener('click', onLogout);

if(sessionStorage.getItem('userId')) {
    loginBtnRef.style.display = 'none';
    registerBtnRef.style.display = 'none';
    userNameRef.textContent = sessionStorage.getItem('email');
    addCatchesBtn.disabled = false;

} else {
    logoutBtnRef.style.display = 'none';
    userNameRef.textContent = 'guest';
}

async function onLogout(e) {
    
    const response = await fetch(URI + endpoints.logout, {
        method: 'GET',
        headers: {
            'X-Authorization': sessionStorage.getItem('accessToken')}
    })

    sessionStorage.clear();
    window.location.href = './index.html';
}

async function onLoadAllCatches() {
    const allCatches = await getEllCatches();
    catchesRef.innerHTML = '';

    allCatches.forEach(element => {
       const catches = generateCatches(element);
       catchesRef.appendChild(catches);
    });

}

async function onCreateCatches(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');

    if(!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error ('error');
    }

    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        })
    }

    try{
        const response = await fetch(catchesURI, data);
        if (response.status !== 200) {
            throw new Error ('error');
        }
    } catch (error) {
        throw new Error ('error');
    }
    e.target.reset();
    onLoadAllCatches();

}

function generateCatches(element) {
    const div = document.createElement('div');
    div.classList.add('catch');
    const isOwner = element._ownerId === sessionStorage.getItem('userId');
    div.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${element.angler}" ${!isOwner ? 'disabled' : ''}>
        <label>Weight</label>
        <input type="text" class="weight" value="${element.weight}" ${!isOwner ? 'disabled' : ''}>
        <label>Species</label>
        <input type="text" class="species" value="${element.species}" ${!isOwner ? 'disabled' : ''}>
        <label>Location</label>
        <input type="text" class="location" value="${element.location}" ${!isOwner ? 'disabled' : ''}>
        <label>Bait</label>
        <input type="text" class="bait" value="${element.bait}" ${!isOwner ? 'disabled' : ''}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value ="${element.captureTime}" ${!isOwner ? 'disabled' : ''}>
        <button class="update" data-id="${element._id}" disabled>Update</button>
        <button class="delete" data-id="${element._id}" disabled>Delete</button>
        `;
       
        if(element._ownerId === sessionStorage.getItem('userId')) {
            const buttons = div.querySelectorAll('button');
            Array.from(buttons).forEach(x => {
                x.disabled = false
                if(x.classList.contains('delete')) {
                   return x.addEventListener('click', onDelete);
                }
                x.addEventListener('click', onEdit);
            })
        }
        return div;
}

async function onEdit(e) {
    const catchesId = e.target.dataset.id;
    const inputs = e.target.parentElement.querySelectorAll('input');
    const angler = inputs[0].value;
    const weight = Number(inputs[1].value);
    const species = inputs[2].value;
    const location = inputs[3].value;
    const bait = inputs[4].value;
    const captureTime = Number(inputs[5].value);
    const _ownerId = sessionStorage.getItem('userId');

    if(!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error ('Missing fields');
    }

    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }
    const  response = await fetch(catchesURI + catchesId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken')
        },
        body: JSON.stringify(data)
    })
    onLoadAllCatches();
}


async function onDelete(e) {
    const catchesId = e.target.dataset.id;
    const response = await fetch(catchesURI + catchesId, {
        method: 'DELETE',
        headers: {
            'X-Authorization': sessionStorage.getItem('accessToken')
        }
    });
    onLoadAllCatches();
}

async function getEllCatches() {
    const response = await fetch(catchesURI);
    const data = await response.json();

    return data;
}