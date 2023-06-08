function counterStrike(array) {

    let energy = Number(array.shift());
    let win = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'End of battle') {
            break;
        }

        let distance = Number(array[i]);

        if (energy >= distance) {

            win++;
            energy -= distance;

        } else {
            console.log(`Not enough energy! Game ends with ${win} won battles and ${energy} energy`);
            return;
        }

        if (win % 3 == 0) {
            energy += win;
        }
    }

    console.log(`Won battles: ${win}. Energy left: ${energy}`);

}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"])
counterStrike(["200", "54", "14", "28", "13", "End of battle"])

