function division(number) {

    let bugDivisionNumber = 0;

    let isValid = false;

    for (let i = 1; i <= number; i++) {

        if (number % i == 0) {

            if (i >= 2 && i <= 10 && i != 5) {
                isValid = true;
                bugDivisionNumber = i;

            }
        }
    }

    if (isValid && bugDivisionNumber > 0) {

        console.log(`The number is divisible by ${bugDivisionNumber}`);
    } else {

        console.log(`Not divisible`);

    }

}