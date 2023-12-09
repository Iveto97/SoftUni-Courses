
export function create(data) {
    let list = '';
    data.forEach(town => {
        list += `
            <li>
                ${town}
            </li>
        `
    });
    return list;
}