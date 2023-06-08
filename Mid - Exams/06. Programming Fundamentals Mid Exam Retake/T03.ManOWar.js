function war(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealthCapacity = Number(input.shift());

    for (const commandLines of input) {
        if (commandLines === "Retire") {
            break;
        }

        let splitCommands = commandLines.split(" ");
        let command = splitCommands[0];
        let index = Number(splitCommands[1]);
        let damageEndIndexHealth = Number(splitCommands[2]);

        switch (command) {
            case "Fire":
                if (index >= 0 && index < warShip.length) {
                    warShip[index] -= damageEndIndexHealth;

                    if (warShip[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;

            case "Defend":
                let damage = Number(splitCommands[3]);

                if (index >= 0 && index < pirateShip.length && damageEndIndexHealth < pirateShip.length) {
                    
                    for (let i = index; i <= damageEndIndexHealth; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;

            case "Repair":
                if (index >= 0 && index < pirateShip.length) {
                    pirateShip[index] += damageEndIndexHealth;
                    if (pirateShip[index] > maxHealthCapacity) {
                        pirateShip[index] = maxHealthCapacity;
                    }
                }
                break;

            case "Status":
                let sectionsNeedRepair = maxHealthCapacity * 0.2;
                let urgent = pirateShip.filter((x) => x < sectionsNeedRepair);
                console.log(`${urgent.length} sections need repair.`);
                break;
        }
    }

    let pirateShipStatus = pirateShip.reduce((x, y) => x + y);
    let warShipStatus = warShip.reduce((x, y) => x + y);

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);
}

war(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
console.log('---------');

war(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])


