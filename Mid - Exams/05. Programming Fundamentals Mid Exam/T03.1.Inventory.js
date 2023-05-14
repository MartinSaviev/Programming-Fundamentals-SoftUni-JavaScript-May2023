function inventory(input) {

    let inventory = input.shift().split(', ');

    let commandsSplit = input.shift().split(' - ');
    let command = commandsSplit[0];
    let item = commandsSplit[1];
    let check;

    while (commandsSplit != 'Craft!') {

        command = commandsSplit[0];
        item = commandsSplit[1];

        switch (command) {
            case 'Collect':

                check = inventory.includes(item);
                if (!check) {
                    inventory.push(item);
                }
                break;
                
            case 'Drop':

                check = inventory.includes(item);

                if (check) {

                    inventory = inventory.filter(x => x !== item);
                }

                break;

            case 'Combine Items':

                let twoItemsArray = [];
                twoItemsArray.push(item);
                let splitItems = twoItemsArray[0].split(':');
                let oldItem = splitItems[0];
                let newItem = splitItems[1];

                check = inventory.includes(oldItem);
                if (check) {

                    let index = inventory.indexOf(oldItem);
                    inventory.splice(index+1, 0, newItem);
                }

                break;

            case 'Renew':

                check = inventory.includes(item);

                if (check) {

                    inventory = inventory.filter(x => x !== item);
                    inventory.push(item);
                }

                break;

        }
      

        commandsSplit = input.shift().split(' - ');
    }

    console.log(inventory.join(', '));

}