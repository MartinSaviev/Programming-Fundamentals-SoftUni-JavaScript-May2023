function simpleCalculator(numOne, numTwo, operator) {

    let sum = 0;

    switch (operator) {
        case 'multiply': multiply(); break;
        case 'divide': divide(); break;
        case 'add': add(); break;
        case 'subtract': subtract(); break;
    }

    function multiply() {
        return sum = numOne * numTwo; 
    }
    function divide() {
        return sum = numOne / numTwo;
    }
    function add() {
        return sum = numOne + numTwo;
    }
    function subtract() {
        return sum = numOne - numTwo;
    }

    return sum;
}