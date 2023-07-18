function barIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g

    let totalPrice = 0;

    for (const line of input) {

        let matchesAll = line.matchAll(pattern);


        for (const match of matchesAll) {

            let count = Number(match.groups.count);
            let price = Number(match.groups.price);
            let currPrice = count * price;

            console.log(`${match.groups.customer}: ${match.groups.product} - ${currPrice.toFixed(2)}`);
            totalPrice += count * price;


        }
    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`);

}

barIncome(['%George%<Croissant>|2|110.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])

barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])