function sumEvanNumbers(input) {

    let initialValue = 0;

    let array = input.filter((a, b) => a % 2 == 0).map(Number).reduce((a, b) => a + b, initialValue);

    console.log(array);

}