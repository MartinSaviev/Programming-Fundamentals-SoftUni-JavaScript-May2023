function firstAndLast(array) {

    let arrayNumbers = array.map(Number);
    let sumFirstAndLast = arrayNumbers[0] + arrayNumbers[arrayNumbers.length - 1];
    console.log(sumFirstAndLast);

}