function guineaPig(input) {

    let quantityFoodKilograms = input.shift() * 1000;
    let quantityHayKilograms = input.shift() * 1000;
    let quantityCoverKilograms = input.shift() * 1000;
    let guineaWeightKilograms = input.shift() * 1000;

    for (let i = 1; i <= 30; i++) {

        let puppyEat = 300;
        quantityFoodKilograms -= puppyEat;

        if (i % 2 == 0) {

            let hay = quantityFoodKilograms * 0.05;
            quantityHayKilograms -= hay;

        } if (i % 3 == 0) {

            let quantity = guineaWeightKilograms / 3;
            quantityCoverKilograms -= quantity;

        }
    }

    let printFood = (quantityFoodKilograms / 1000).toFixed(2);
    let printHay = (quantityHayKilograms / 1000).toFixed(2);
    let printCover = (quantityCoverKilograms / 1000).toFixed(2);


    if (printFood > 0 && printHay > 0 && printCover > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${printFood}, Hay: ${printHay}, Cover: ${printCover}.`);
    } else {

        console.log(`Merry must go to the pet store!`);
        
    }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);

