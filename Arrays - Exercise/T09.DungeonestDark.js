function dungeonest(input) {

    let health = 100;
    let coins = 0;
    let counterRoom = 0;

    let rooms = input.shift().split('|');

    for (const roomLine of rooms) {

        [itemOrMonster, number] = roomLine.split(' ');
        number = Number(number);

        switch (itemOrMonster) {
            case 'potion':

                counterRoom++;
                if (health < 100) {

                    let   addHealth = 100 - health;
                    health += number;
                  
                    if (health > 100) {
                        health = 100;

                    } else {
                        addHealth = number; 
                    }

                    console.log(`You healed for ${addHealth} hp.`);
                    console.log(`Current health: ${health} hp.`);

                }

                break;
            case 'chest':

                counterRoom++;

                console.log(`You found ${number} coins.`);
                coins += number;
                break;
            default:

                counterRoom++;

                health -= number;



                if (health <= 0) {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${counterRoom}`);
                    return;

                }
                console.log(`You slayed ${itemOrMonster}.`);
                break;

        }
    }
    console.log('You\'ve made it!');
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonest(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log('----------');
dungeonest(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])

