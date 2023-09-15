function gladiatorInventory(info) {
    let inventory = info.shift().split(' ');
    let upg = '';

    for (let i = 0; i < info.length; i++) {
        [command, equipment] = info[i].split(' ');
        switch (command) {
            case "Buy":
                if(!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case "Trash":
                for (let index = 0; index < inventory.length; index++) {
                    let element = inventory[index];
                    if (element === equipment) {
                        inventory.splice(index, 1);
                    } 
                }
                break;
            case "Repair":
                for (let index = 0; index < inventory.length; index++) {
                    if (inventory[index] === equipment) {
                        let item = inventory.splice(index, 1);
                        inventory.push(item.toString());
                    }
                }
                break;
            case "Upgrade":
                [equ, upgrade] = equipment.split("-");
                for (let index = 0; index < inventory.length; index++) {
                    if (inventory[index] === equ) {
                        upg += `${equ}:${upgrade}`;
                        inventory.splice(index + 1, 0, upg);
                    }
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])