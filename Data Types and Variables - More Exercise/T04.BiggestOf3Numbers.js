function bigNumber(firstNumber, secondNumber, thirdNumber) {

    let array = new Array(firstNumber, secondNumber, thirdNumber)

    array.sort((a, b) => b - a);

    console.log(array[0]);
}