function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');
    let index;
    for (const iterator of input) {

        let [command, equipment] = iterator.split(' ');

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {

                    inventory.push(equipment);
                }
                
                break;
            case 'Trash':

                if (inventory.includes(equipment)) {

                    index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }

                break;
            case 'Repair':

                if (inventory.includes(equipment)) {

                    index = inventory.indexOf(equipment);
                    let lastPosition = inventory.splice(index, 1)[0];
                    inventory.push(lastPosition);
                }

                break;
            case 'Upgrade':

                let [oldEquipment, newEquipment] = equipment.split('-');

                if (inventory.includes(oldEquipment)) {
                    let addNewEquipment = `${oldEquipment}:${newEquipment}`;

                    index = inventory.indexOf(oldEquipment);
    
                    inventory.splice(index + 1, 0, addNewEquipment)
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


