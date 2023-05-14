function topIntegers(stringNumbers) {

    let numbers = stringNumbers.split(' ').map(Number);
    let sumAllNumbers = numbers.reduce((a, b) => a + b, 0);
    let numbersLength = numbers.length;
    let averageNumber = sumAllNumbers / numbersLength;

    let allNumbersBiggerThenAverageNumber = numbers.filter((x, i) => x > averageNumber, 0).sort((a, b) => b - a);

    let fiveNumbers = allNumbersBiggerThenAverageNumber.splice(0, 5);

    if (fiveNumbers.length <= 0) {
        console.log('No');
       
    } else {

        console.log(fiveNumbers.join(' '));

    }
}

topIntegers('10 20 30 40 50')
topIntegers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
topIntegers('1')
topIntegers('-1 -2 -3 -4 -5 -6');