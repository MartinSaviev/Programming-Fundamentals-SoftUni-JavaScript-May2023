function inventory(input) {

    let inventory = input.shift().split(', ');

    let commandsSplit = input.shift().split(' - ');
    let command = commandsSplit[0];
    let item = commandsSplit[1];

    while (commandsSplit != 'Craft!') {

        command = commandsSplit[0];
        item = commandsSplit[1];

        switch (command) {
            case 'Collect':

                Collect();

                break;

            case 'Drop':

                Drop();

                break;

            case 'Combine Items':

                Combine();

                break;

            case 'Renew':

                Renew();

                break;

        }

        commandsSplit = input.shift().split(' - ');
    }

    console.log(inventory.join(', '));

    function Renew() {

        if (inventory.includes(item)) {

            inventory = inventory.filter(x => x !== item);
            inventory.push(item);
        }
    }

    function Combine() {

        let removeItemAndPushLast = item.split(':');
        let oldItem = removeItemAndPushLast[0];
        let newItem = removeItemAndPushLast[1];

        if (inventory.includes(oldItem)) {

            let index = inventory.indexOf(oldItem);
            inventory.splice(index + 1, 0, newItem);
        }
    }

    function Drop() {
        if (inventory.includes(item)) {

            inventory = inventory.filter(x => x !== item);
        }
    }

    function Collect() {

        if (!inventory.includes(item)) {
            inventory.push(item);
        }
    }
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)