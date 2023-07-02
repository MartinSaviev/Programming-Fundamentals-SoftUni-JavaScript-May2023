function piccolo(input) {

    let parking = new Set();

    for (const line of input) {
        let [command, carNumber] = line.split(', ');

        if (command === 'IN') {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }

    if (parking.size == 0) {

        console.log('Parking Lot is Empty');
    } else {
        let result = Array.from(parking);
        result.sort();

        for (const print of result) {
            console.log(print);

        }
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
