function addAndSubtract(firstNum, secondNum, thirdNum) {

    function add(first, second) {
        return first + second;
    }
    
    let sumAdd = add(firstNum, secondNum);

    function subtract(second, third) {

        return second - third;
    }

    let result = subtract(sumAdd , thirdNum);

    console.log(result);

}