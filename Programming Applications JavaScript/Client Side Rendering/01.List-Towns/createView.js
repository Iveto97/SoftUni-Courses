import { listTemp } from "./createList.js";

export function createTemp(towns) {
    const list = listTemp(towns);
    return `
        <ul>
            ${list}
        </ul>
    `
}