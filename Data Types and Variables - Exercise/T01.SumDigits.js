function sumDigits(number) {

    let splitNumber = number.toString().split('').map(Number)
    
    let sum = splitNumber.reduce((a, b) => a + b);

   console.log(sum);
}