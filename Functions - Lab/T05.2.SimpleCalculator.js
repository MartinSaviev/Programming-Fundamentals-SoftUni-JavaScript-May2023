function simpleCalculator(numOne, numTwo, operator) {

    switch (operator) {
        case 'multiply': multiply(); break;
        case 'divide': divide(); break;
        case 'add': add(); break;
        case 'subtract': subtract(); break;
    }

    function multiply() {
        sum = numOne * numTwo;
    }
    function divide() {
        sum = numOne / numTwo;
    }
    function add() {
        sum = numOne + numTwo;
    }
    function subtract() {
        sum = numOne - numTwo;
    }

    return sum;
}