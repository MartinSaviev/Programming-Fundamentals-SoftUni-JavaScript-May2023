function ages(ages) {

    let person;

    if (ages < 0) {
        person = 'out of bounds'
    } else if (ages <= 2) {
        person = 'baby';
    } else if (ages <= 13) {
        person = 'child'
    } else if (ages <= 19) {
        person = 'teenager';
    } else if (ages <= 65) {
        person = 'adult'
    } else if (ages > 65) {
        person = 'elder'
    }

    console.log(person);

}