import { createTemp } from "./createView.js";
const root = document.getElementById('root');

export function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const towns = Object.fromEntries(formData);

    root.innerHTML = '';
    root.innerHTML = createTemp(towns);
}