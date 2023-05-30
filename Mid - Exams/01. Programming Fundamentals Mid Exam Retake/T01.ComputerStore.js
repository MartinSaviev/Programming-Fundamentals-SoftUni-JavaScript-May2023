function computerStore(input) {

    let price = 0;
    let taxes = 0;
    let specialOrRegular;


    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'special') {
            specialOrRegular = true;
            break;
        } else if (input[i] === 'regular') {
            specialOrRegular = false;
            break;
        }


        if (Number(input[i]) < 0) {
            console.log("Invalid price!");
            continue;
        }

        price += Number(input[i]);


    }
    taxes = price * 0.20;

    let totalPRice = 0;

    if (specialOrRegular) {
        totalPRice = (price + taxes) * 0.90;

    } else if (specialOrRegular === false) {
        totalPRice = (price + taxes)
    }

    if (totalPRice === 0) {
        console.log("Invalid order!");

    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price}$
Taxes: ${taxes}$
-----------
Total price: ${totalPRice.toFixed(2)}$`);

    }
}

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
])
console.log('----------');
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    


