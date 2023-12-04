const baseURI = 'http://localhost:3030/jsonstore/collections/books/';

const loadBtnRef = document.getElementById('loadBooks');
loadBtnRef.addEventListener('click', onLoadBooks);

const table = document.querySelector('table').children[1];

const submitBtn = document.querySelector('form button');
submitBtn.addEventListener('click', create);

table.innerHTML = '';


async function onLoadBooks() {

    // e.preventDefault();
    table.innerHTML = '';
    const response = await fetch(baseURI, {
        method: 'GET'
    });

    
    const data = await response.json();

    Object.entries(data).forEach(element => {
       const row = createDomElement(element);
        table.appendChild(row);
    });
}

async function create(e) {
    // e.preventDefault();

    const formData = new FormData(e.target.parentElement);
    const title = formData.get('title');
    const author = formData.get('author');

    if(!title || !author) {
        throw new Error('Error');
    }

    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            author,
            title,   
        })
    }

    try {
        const response = await fetch(baseURI, data);
        
        if (response.status !== 200) {
            throw new Error ('error');
        }
    } catch(error) {
        console.log('Error');
    } 

    // e.target.reset();
    onLoadBooks();
}

async function onEdit(e) {

    const id = e.target.parentElement.parentElement.id;
    const response = await fetch(baseURI + id);
    const data = await response.json();

    const inputs = document.querySelectorAll('input');
 
    inputs[0].value = data.title;
    inputs[1].value = data.author;

    submitBtn.textContent = 'Save';

    const h3 = document.querySelectorAll('form h3')[0];
    h3.textContent = 'Edit FORM';

    submitBtn.removeEventListener('click', create);

    submitBtn.addEventListener('click', putCreator);
      
    async function putCreator(e) {
        // e.preventDefault();
 
        const title = inputs[0].value;
        const author = inputs[1].value;
        // const title = event.target.parentElement.title.value;
        // const author = event.target.parentElement.author.value;
    
        const dataRes = {
            author,
            title,
        }
      
        const res = await fetch(baseURI + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataRes)
        })

        inputs[0].value = '';
        inputs[1].value = '';

        
        submitBtn.textContent = 'Submit';
        h3.textContent = 'FORM';

        submitBtn.removeEventListener('click', putCreator);

        submitBtn.addEventListener('click', create);

        onLoadBooks();    
    }
}

async function onDelete(e) {
    
    const parentId = e.target.parentElement.parentElement.id;

    const response = await fetch(baseURI + parentId, {
        method: 'DELETE'
    });
    
    onLoadBooks();

}


function createDomElement(data) {

    const tableRow = document.createElement('tr');
    tableRow.setAttribute('id', data[0]);

    const author = document.createElement('td');
    author.textContent =data[1].author;

    const title = document.createElement('td');
    title.textContent = data[1].title;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', onEdit);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', onDelete);
    
    const buttons = document.createElement('td');
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    
    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(buttons);

    
    return tableRow;
}