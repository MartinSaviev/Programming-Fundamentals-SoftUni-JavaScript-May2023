function treasureHunt(input) {
    let treasureChest = input.shift().split('|');

    for (const commandLIst of input) {

        if (commandLIst === 'Yohoho!') {
            break;
        }

        let tokens = commandLIst.split(' ');
        let action = tokens[0];
        let countAndIndex = Number(tokens[1]);

        if (action === 'Loot') {

            for (let i = 1; i < tokens.length; i++) {
                if (!treasureChest.includes(tokens[i])) {
                    treasureChest.unshift(tokens[i]);
                }
            }

        } else if (action === 'Drop') {

            if (treasureChest.indexOf(treasureChest[countAndIndex]) !== -1) {
                let droppedItem = treasureChest.splice(countAndIndex, 1)[0];
                treasureChest.push(droppedItem);
            }
        } else if (action === 'Steal') {


            if (countAndIndex >= treasureChest.length) {
                console.log(treasureChest.join(', '));
                treasureChest = [];
            } else {
                let stolenItems = treasureChest.splice(-countAndIndex);
                console.log(stolenItems.join(', '));
            }
        }
    }

    let totalItemsSum = treasureChest.reduce((sum, item) => sum + item.length, 0) / treasureChest.length

    if (totalItemsSum > 0) {
        console.log(`Average treasure gain: ${totalItemsSum.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
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

