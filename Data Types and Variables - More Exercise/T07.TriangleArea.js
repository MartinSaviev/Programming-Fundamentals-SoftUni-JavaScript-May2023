function triangleArea(firstNumber,secondNumber,thirdNumber) {

    let s = (firstNumber+secondNumber+thirdNumber)/2;
    
    let area = Math.sqrt(s*(s-firstNumber)*(s-secondNumber)*(s-thirdNumber));
    console.log(area);
    
}