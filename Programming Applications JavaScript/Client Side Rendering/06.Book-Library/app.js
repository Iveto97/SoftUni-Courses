import { html, render } from './node_modules/lit-html/lit-html.js';
import { tableTemp } from "./bookTable.js";
import { createAddForm } from "./addBookTemp.js";
import { getInfo } from "./requester.js";
import { createRow } from "./tableRowTemp.js";
import { onSubmit } from "./event.js";
import { onDelete } from "./event.js";
import { onEdit } from "./event.js";

const body = document.querySelector('body');

const table = tableTemp();
const addForm = createAddForm();
render([table, addForm], body)

const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', onClick);

const tableBody = document.querySelector('tbody');

export async function onClick() {

    const data = await getInfo();
    const dataArr = Object.entries(data);
    let booksArr = [];

    dataArr.forEach(book => {
        booksArr.push(createRow(book));
        
    });
    render(booksArr, tableBody)

    const deleteBtn = document.querySelectorAll('td button.delete');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', onDelete);
    })

    const editBtn = document.querySelectorAll('td button.edit');
    editBtn.forEach(btn => {
        btn.addEventListener('click', onEdit);
    })

}

const form = document.getElementById('add-form');
form.addEventListener('submit', onSubmit);

