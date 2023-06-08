function treasureHunt(input) {
    let treasureChest = input.shift().split('|');

    for (const commandLIst of input) {

        if (commandLIst === 'Yohoho!') {
            break;
        }

        let damageEndIndexHealths = commandLIst.split(' ');
        let action = damageEndIndexHealths[0];
        let countAndIndex = Number(damageEndIndexHealths[1]);

        if (action === 'Loot') {

            lootItems(damageEndIndexHealths);

        } else if (action === 'Drop') {

            dropItems(countAndIndex);

        } else if (action === 'Steal') {

            stealItems(countAndIndex);
        }
    }

    let totalItemsSum = treasureChest.reduce((sum, item) => sum + item.length, 0) / treasureChest.length

    if (totalItemsSum > 0) {
        console.log(`Average treasure gain: ${totalItemsSum.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }

    function stealItems(countAndIndex) {

        if (countAndIndex >= treasureChest.length) {
            console.log(treasureChest.join(', '));
            treasureChest = [];
        } else {
            let stolenItems = treasureChest.splice(-countAndIndex);
            console.log(stolenItems.join(', '));
        }
    }

    function dropItems(countAndIndex) {

        if (treasureChest.indexOf(treasureChest[countAndIndex]) !== -1) {
            let droppedItem = treasureChest.splice(countAndIndex, 1)[0];
            treasureChest.push(droppedItem);
        }
    }

    function lootItems(damageEndIndexHealths) {

        for (let i = 1; i < damageEndIndexHealths.length; i++) {
            if (!treasureChest.includes(damageEndIndexHealths[i])) {
                treasureChest.unshift(damageEndIndexHealths[i]);
            }
        }
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
console.log('---------------');

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

