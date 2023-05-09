function calculator(firstNumber, operator, secondNumber) {

    let array = new Array(firstNumber, secondNumber);

    let result = 0;
    if (operator === '+') {

        result = array.reduce((a, b) => a + b)

    } else if (operator === '-') {

        result = array.reduce((a, b) => a - b)
    } else if (operator === '/') {

        result = array.reduce((a, b) => a / b)

    } else if (operator === '*') {

        result = array.reduce((a, b) => a * b)
    }

    console.log(result.toFixed(2));

}