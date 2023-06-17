function sumEvanNumbers(input) {

    let array = input.filter((a, b) => a % 2 == 0).map(Number);

    if (array[0] > 0) {
        let sumArray = array.reduce((a, b) => a + b);

        console.log(sumArray);

    } else {
        console.log(0);
    }
}