
export function creator(data) {
    return `
        <tr id='${data._id}'>
            <td>${data.firstName} ${data.lastName}</td>
            <td>${data.email}</td>
            <td>${data.course}</td>
        </tr>
    `
}

