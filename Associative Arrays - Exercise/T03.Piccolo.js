function piccolo(input) {

    let carsEntries = {};

    for (const elementLine of input) {

        let [direction, carNumber] = elementLine.split(', ');

        if (direction.includes('IN')) {

            carsEntries[carNumber] = direction;

        } else if (direction.includes('OUT')) {

            if (carsEntries.hasOwnProperty(carNumber)) {

                delete carsEntries[carNumber];
            }
        }
    }

    const length = Object.keys(carsEntries).length;
    if (length === 0) {
        console.log('Parking Lot is Empty');
    }

    let sortedObject = Object.keys(carsEntries).sort((a, b) => a.localeCompare(b));
z
    for (const key in sortedObject) {

        console.log(sortedObject[key]);
        
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

console.log('-----------');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])
