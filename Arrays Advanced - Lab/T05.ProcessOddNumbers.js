function processOddNumbers(input) {

    let arrayNumbers = input
        .map(Number)
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse();

    console.log(arrayNumbers.join(' '));
}