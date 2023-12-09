import { html,render } from "./node_modules/lit-html/lit-html.js";

export function createRow(rowData) {
   
    return html`
    <tr id=${rowData[0]}>
        <td>${rowData[1].title}</td>
        <td>${rowData[1].author}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    </tr>
`

}
