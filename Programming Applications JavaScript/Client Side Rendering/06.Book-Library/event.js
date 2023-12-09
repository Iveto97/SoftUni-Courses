import { html, render } from './node_modules/lit-html/lit-html.js';

import { postInfo } from './requester.js'
import { deleteInfo } from './requester.js'
import { updateInfo } from './requester.js'

import { tableTemp } from './bookTable.js'

import { editFormTemp } from "./addBookTemp.js";
import { createAddForm } from "./addBookTemp.js";

export function onSubmit(event) {
    event?.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get('title');
    const author = formData.get('author');

    if(!title || !author) {
        return alert('Empty field');
    }

    const data = {
        title,
        author
    }

    postInfo(data);
    event.target.reset();
}

export function onDelete(event) {
    const parentId = event.target.parentElement.parentElement.id;
    deleteInfo(parentId);
}

export function onEdit(event) {
    const body = document.querySelector('body');

    let table = tableTemp();
    let edit = editFormTemp();
    render([table, edit], body);

    const row = event.target.parentElement.parentElement;
    const id = row.id;

    const form = document.querySelector('form');
    form.addEventListener('submit', onSave);

    function onSave(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const book = {
            title: formData.get('title'),
            author: formData.get('author')
        };
        updateInfo(book, id);
        table = tableTemp();
        edit = createAddForm();
        render([table, edit], body);
    }
}



