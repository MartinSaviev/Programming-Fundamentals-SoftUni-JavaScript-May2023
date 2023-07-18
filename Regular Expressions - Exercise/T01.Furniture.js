function furniture(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)\b/g;

    let sum = 0;
    console.log('Bought furniture:');
    for (const line of input) {

        if (line === 'Purchase') {

            break;
        }

        let matches = line.matchAll(pattern);

        for (const match of matches) {

            console.log(match.groups.name);
            let price = Number(match.groups.price);
            let quantity = Number(match.groups.quantity)

            sum += price * quantity;
        }
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
console.log('-----------');

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)