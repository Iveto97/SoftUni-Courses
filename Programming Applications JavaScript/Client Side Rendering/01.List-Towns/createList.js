

export function listTemp(towns) {
    const townArr = Object.values(towns);
    const townsStr = townArr.join().split(', ');
    let list = '';
    townsStr.forEach(town => {
        list += `
            <li>
                ${town}
            </li>
        `;
    });
    
    return list;
}