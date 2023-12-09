import { getAllItems } from "./requester.js";
import { onPost } from "./requester.js";

const select = document.getElementById('menu');
const addBtn = document.querySelector('input[type="submit"]');

const data = await getAllItems();

addItem(data)

export function addItem(towns) {
    
    const townsArr = Object.values(towns);
    select.innerHTML = '';

    townsArr.forEach(town => {
        select.innerHTML += `
            <option value='${town._id}'>
                ${town.text}
            </option>
        `
    })
}

const ctx = {
    getAllItems,
    addItem
}

addBtn.addEventListener('click', onPost);

