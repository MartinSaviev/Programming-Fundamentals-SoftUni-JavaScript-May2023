function printElements(input) {

    let arrayElements = input;
    let lastElement = Number(arrayElements.pop());

    let array = [];

    for (let i = 0; i < arrayElements.length; i += lastElement) {

        array.push(arrayElements[i]);
    }
    console.log(array.join(' '));
}

printElements(['5', '20', '31', '4', '20', '2'])
console.log('--------------');

printElements(['dsa', 'asd', 'test', 'test', '2']);
console.log('---------------');
printElements(['1', '2', '3', '4', '5', '6']);
