function shortNumbers(number1, number2, number3) {

    let array = [];

    array.push(number1, number2, number3);

    let number = array.sort((a, b) => b - a)

    for (const element of number) {
        console.log(element);
    }
}