function lastDigitString(number) {

    let lastDigitNumber = number % 10;

    let lastDigitText = '';

    switch (lastDigitNumber) {
        case 0: lastDigitText = 'zero'; break;
        case 1: lastDigitText = 'one'; break;
        case 2: lastDigitText = 'two'; break;
        case 3: lastDigitText = 'three'; break;
        case 4: lastDigitText = 'four'; break;
        case 5: lastDigitText = 'five'; break;
        case 6: lastDigitText = 'six'; break;
        case 7: lastDigitText = 'seven'; break;
        case 8: lastDigitText = 'eight'; break;
        case 9: lastDigitText = 'nine'; break;
    }

    console.log(lastDigitText);

}