function theatre(day, age) {

    let price = 0;

    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    }

    if (day === 'Weekday' && age <= 18) {
        price = 12;
    } else if (day === 'Weekday' && age <= 64) {
        price = 18;
    } else if (day === 'Weekday' && age <= 122) {
        price = 12;
    }
    if (day === 'Weekend' && age <= 18) {
        price = 15;
    } else if (day === 'Weekend' && age <= 64) {
        price = 20;
    } else if (day === 'Weekend' && age <= 122) {
        price = 15;
    }
    if (day === 'Holiday' && age <= 18) {
        price = 5;
    } else if (day === 'Holiday' && age <= 64) {
        price = 12;
    } else if (day === 'Holiday' && age <= 122) {
        price = 10;
    }

    console.log(price + '$');

}