function primeNumber(number) {
    let counter = 0;
    let isValid = true;
    
    for (let i = 1; i <= number; i++) {

        if (number % i == 0) {
             counter++;
            if (counter > 2) {
                isValid = false;
                console.log('false');
                break;
            }
        }
    }
    if (isValid) {

        console.log('true');    
    }

}