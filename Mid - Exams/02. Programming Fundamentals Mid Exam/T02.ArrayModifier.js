function modifier(array) {

    let arrayNumbers = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(' ');
        let tokens = commands[0];
        if (tokens === 'end') {
            break;
        }
        if (tokens === 'swap') {

            let swapIndex = Number(commands[1]);
            let swapIndex1 = Number(commands[2]);

            let sliceFirsNumber = arrayNumbers.splice(swapIndex, 1, 9999)
            let sliceSecondNumbers = arrayNumbers.splice(swapIndex1, 1, 9999);

            arrayNumbers.splice(swapIndex, 1, sliceSecondNumbers[0]);
            arrayNumbers.splice(swapIndex1, 1, sliceFirsNumber[0]);

        }
        else if (tokens === 'multiply') {

            let swapIndex = Number(commands[1]);
            let swapIndex1 = Number(commands[2]);

            let sumNumbers = arrayNumbers[swapIndex] * arrayNumbers[swapIndex1];
            arrayNumbers.splice(swapIndex, 1, sumNumbers);

        }
        else if (tokens === 'decrease') {

            let decreaseArray = arrayNumbers.map(x => x - 1);

            arrayNumbers = decreaseArray.slice(0);
        }
    }

    console.log(arrayNumbers.join(", "));

}
modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)
console.log('---------');

modifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)