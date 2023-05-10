function ArrayManipulations(input) {

    let arrayNumbers = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        commandAndNumber = input[i].split(' ');
        let command = commandAndNumber[0];
        let number1 = Number(commandAndNumber[1]);
        let number2 = Number(commandAndNumber[2]);

        if (command === 'Add') {

            arrayNumbers.push(number1);
        }
        else if (command === 'Remove') {
            arrayNumbers = arrayNumbers.filter(el => el !== number1)
            
            
        } else if (command === 'RemoveAt') {
            arrayNumbers.splice(number1, 1)
        
        
        } else if (command === 'Insert') {

            arrayNumbers.splice(number2,0,number1)
        }

    }
    console.log(arrayNumbers.join(" "));
}