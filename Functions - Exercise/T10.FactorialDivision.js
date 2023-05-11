function factorial(number, number2) {

    let factorial = 1;
    let factorial2 = 1;

    for (let i = 1; i <= number; i++) {

        factorial = i * factorial;
    }

    for (let j = 1; j <= number2; j++) {
        factorial2 *= j;
    }

    console.log((factorial / factorial2).toFixed(2));
}