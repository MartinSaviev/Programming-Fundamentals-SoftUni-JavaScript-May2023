function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let fixNumber = number.toFixed(precision)
    console.log(parseFloat(fixNumber));
}