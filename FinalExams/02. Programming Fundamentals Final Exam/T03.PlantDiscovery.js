function plantDiscovery(input) {

    let plantCount = Number(input.shift());

    let plants = {};

    for (let i = 0; i < plantCount; i++) {

        let [name, rarity] = input.shift()
        .split('<->')
        
        plants[name] = {
            rarity: Number(rarity),
            rating: [],
        }

    }

    for (const line of input) {

        if (line === 'Exhibition') {
            break;
        }

        let [command, plantNamesAmdRating] = line.split(': ');
        let [plantName, ratingOrRarity] = plantNamesAmdRating.split(' - ');  
        ratingOrRarity = Number(ratingOrRarity);
        let plant = plants[plantName];

        if (plant) {

            switch (command) {
                case 'Rate':

                    plant.rating.push(ratingOrRarity);

                    break;
                case 'Reset':

                    plant.rating = [];

                    break;
                case 'Update':

                    plant.rarity = ratingOrRarity;
                    break;
            }
        }else {
            console.log('error');
            
        }
    }

    console.log('Plants for the exhibition:');

    for (const plant in plants) {

        let currLength = plants[plant].rating.length;
        let sum = plants[plant].rating.reduce((a, b) => a + b, 0);
        let averageRating = sum / currLength || 0;


        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);

    }

}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
