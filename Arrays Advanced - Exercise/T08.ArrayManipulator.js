function ArrayManipulator(array, input) {
    //[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    for (let i = 0; i < input.length; i++) {

        let commands = input[i].split(',');
        let command = commands[0].split(' ');

        if (command[0] === 'add') {

            let index = Number(command[1]);
            let number = Number(command[2]);

            array.splice(index, 0, number);

        }
        else if (command[0] === 'contains') {

            let number = Number(command[1]);
            let checkNumberInIndex = array.indexOf(number)
            console.log(checkNumberInIndex);

        } else if (command[0] === 'remove') {

            let index = Number(command[1]);
            array.splice(index, 1);

        } else if (command[0] === 'shift') {
            let position = Number(command[1]);

            for (let i = 0; i < position; i++) {

                let number = array.shift();
                array.push(number);
            }
        } else if (command[0] === 'sumPairs') {
            let newArray = []
            for (let i = 0; i < array.length; i++) {

                let sliceArray = array.splice(0, 2);
                let currNum = sliceArray.reduce((a, b) => a + b);
                newArray.push(currNum);
                i--;
            }
            array = newArray.splice(0);

        } else if (command[0] === 'addMany') {

            index = Number(command[1]);
            command.shift();
            command.shift();
                command.reverse();
                
            for (let i = 0; i < command.length; i++) {

                let number = Number(command.shift());

                array.splice(index,0,number);
                i--;
            }

        }

        else if (command[0] === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
            break;
        }
    }
}

ArrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],['sumPairs','sumPairs','addMany 0 -1 -2 -3','print'])