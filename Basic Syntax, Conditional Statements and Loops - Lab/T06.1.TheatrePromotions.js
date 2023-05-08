function theatre(day, age) {

    let price = 0;
    let isValidPrice = true;

    if (day === 'Weekday') {
        if (age < 0) {
            isValidPrice = false;
        } else if (age <= 18) {
            price = 12;
        } else if (age <= 64) {
            price = 18;
        } else if (age <= 122) {
            price = 12;
        } else {
            isValidPrice = false;
        }

    } else if (day === 'Weekend') {
        if (age < 0) {
            isValidPrice = false;
        } else if (age <= 18) {
            price = 15;
        } else if (age <= 64) {
            price = 20;
        } else if (age <= 122) {
            price = 15;
        } else {
            isValidPrice = false;
        }

    } else if (day === 'Holiday') {
        if (age < 0) {
            isValidPrice = false;
        } else if (age <= 18) {
            price = 5;
        } else if (age <= 64) {
            price = 12;
        } else if (age <= 122) {
            price = 10;
        } else {
            isValidPrice = false;
        }

    }
    if (isValidPrice) {

        console.log(`${price}$`);
    } else {
        console.log('Error!');

    }
}