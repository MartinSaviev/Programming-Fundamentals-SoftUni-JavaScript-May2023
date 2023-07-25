function piratesDescription(input) {

    let pirates = {};

    [commandAndCity, population, gold] = input.shift()
        .split('||');

    population = Number(population);
    gold = Number(gold);

    while (commandAndCity !== 'Sail') {

        if (!pirates.hasOwnProperty(commandAndCity)) {

            pirates[commandAndCity] = {

                population: population,
                gold: gold,
            }
        } else {

            pirates[commandAndCity].population += population;
            pirates[commandAndCity].gold += gold;

        }

        [commandAndCity, population, gold] = input.shift()
            .split('||');
        population = Number(population);
        gold = Number(gold);

    }

    for (const line of input) {


        if (line === 'End') {
            break;
        }

        let [command, town, moneyOrPeople, money] = line.split('=>')
        money = Number(money);
        let people = Number(moneyOrPeople);
        switch (command) {
            
            case 'Plunder':

                let attackPeople = people;
                let killPeople = pirates[town].population - attackPeople;
                let plunderGold = pirates[town].gold - money

                if (killPeople >= 0 && plunderGold >= 0) {

                    pirates[town].population -= people
                    pirates[town].gold -= money

                    console.log(`${town} plundered! ${money} gold stolen, ${people} citizens killed.`);
                } if  (killPeople <= 0 || plunderGold <= 0){

                    console.log(`${town} has been wiped off the map!`);
                    delete (pirates[town]);
                }

                break;

            case 'Prosper':
                let addMoney = Number(moneyOrPeople)
                if (addMoney < 0) {

                    console.log('Gold added cannot be a negative number!');

                } else {
                    
                    pirates[town].gold += addMoney;
                    console.log(`${addMoney} gold added to the city treasury. ${town} now has ${pirates[town].gold} gold.`);

                }

                break;
        }

    }

    let shipExist =  Object.keys(pirates).length;

    if (shipExist <= 0) {

        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

    } else {
        console.log(`Ahoy, Captain! There are ${shipExist} wealthy settlements to go to:`);

        for (const town in pirates) {

            console.log(`${town} -> Population: ${pirates[town].population} citizens, Gold: ${pirates[town].gold} kg`);


        }
    }
}

piratesDescription((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)
console.log('------');
piratesDescription((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
)
