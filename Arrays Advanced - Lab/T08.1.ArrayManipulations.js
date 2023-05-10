function ArrayManipulations(input) {

    let arrayNumbers = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        commandAndNumber = input[i].split(' ');
        let command = commandAndNumber[0];
        let number1 = Number(commandAndNumber[1]);
        let number2 = Number(commandAndNumber[2]);

        if (command === 'Add') {

            add(number1);
        }
        else if (command === 'Remove') {
            remove(number1);

        } else if (command === 'RemoveAt') {
            removeAt(number1);

        } else if (command === 'Insert') {

            insert(number2, number1);
        }
    }
    console.log(arrayNumbers.join(" "));

    function insert(index, number) {
        return arrayNumbers.splice(index, 0, number);
    }
    function removeAt(number) {
        return arrayNumbers.splice(number, 1);
    }
    function remove(number) {
        return arrayNumbers = arrayNumbers.filter(el => el !== number);
    }
    function add(number) {
        return arrayNumbers.push(number);
    }
}