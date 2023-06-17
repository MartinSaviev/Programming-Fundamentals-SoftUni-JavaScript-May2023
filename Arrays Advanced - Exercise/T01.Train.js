function train(input) {

    let arrayNumbers = input.shift().split(' ').map(Number);
    let capacity = Number(input.shift());
    for (let i = 0; i < input.length; i++) {

        let commandOrNumber = input[i].split(' ');
        let command = commandOrNumber[0];

        if (command === 'Add') {
            let number = Number(commandOrNumber[1]);
            arrayNumbers.push(number)

        } else {
            let enterPassenger = Number(commandOrNumber[0]);

            for (let add = 0; add < arrayNumbers.length; add++) {

                let checkFreeSeats = enterPassenger + arrayNumbers[add];

                if (checkFreeSeats <= capacity) {
                    arrayNumbers[add] += enterPassenger;
                    break;
                }
            }
        }
    }

    console.log(arrayNumbers.join(' '));
}