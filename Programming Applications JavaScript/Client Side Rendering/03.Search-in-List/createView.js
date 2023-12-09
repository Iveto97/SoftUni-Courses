import { create } from "./createList.js";

export function createTemp(towns) {
    const list  = create(towns);
    return `
        <ul>
          ${list}
        </ul>
    `
}