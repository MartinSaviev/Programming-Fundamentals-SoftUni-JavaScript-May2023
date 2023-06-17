function Condense(array) {

    let arrayCopy = new Array(array.length);

    for (let i = 0; i < arrayCopy.length - 1; i++) {

        arrayCopy = [];
        for (let z = 0; z < array.length; z++) {
            let currSum = 0;
            let currNumber = array[z];
            let secondNumber = array[z + 1]
            if (z === array.length - 1) {
                break;
            }
            currSum = currNumber + secondNumber;

            arrayCopy.push(currSum)

        }

        array = arrayCopy;
        i--;

    }
    console.log(array.join(''));
}