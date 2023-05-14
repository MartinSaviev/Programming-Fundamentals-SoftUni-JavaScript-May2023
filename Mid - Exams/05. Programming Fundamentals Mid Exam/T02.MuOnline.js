function muOnline(input) {

    let arrayRooms = input.split('|');

    let hero = 100;
    let counterVisitRoom = 0;
    let killedHero = ''
    let bitcoins = 0;

    while (hero >= 0) {

        if (arrayRooms.length === 0) {
            break;
        }
        let commandsLine = arrayRooms.shift().split(' ');
        let command = commandsLine[0];
        let healthOrBitcoins = Number(commandsLine[1]);
        counterVisitRoom++;

        switch (command) {

            case 'potion':

                if (hero < 100) {
                   let currHeroHealth = hero;
                    hero += healthOrBitcoins
                    
                    if (hero > 100) {

                        let addHealth = 100 - currHeroHealth;

                        hero = 100;
                        console.log(`You healed for ${addHealth} hp.`);

                    }else{

                        console.log(`You healed for ${healthOrBitcoins} hp.`);
                    }
                    
                    console.log(`Current health: ${hero} hp.`);

                }
                break;
            case 'chest':

                bitcoins += healthOrBitcoins;
                console.log(`You found ${healthOrBitcoins} bitcoins.`);
                break;
            default:

                hero -= healthOrBitcoins;

                if (hero <= 0) {

                    killedHero = command;
                    console.log(`You died! Killed by ${killedHero}.`);
                    console.log(`Best room: ${counterVisitRoom}`);
                    return;

                }
                console.log(`You slayed ${command}.`);
                break;
        }
    }
    if (hero > 0) {

        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${hero}`);
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
console.log('--------');
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");


