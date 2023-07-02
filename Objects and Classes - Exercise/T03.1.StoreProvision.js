function store(arrStock, arrDelivery) {

    let currStock = {};

    for (let f = 0; f < arrStock.length; f += 2) {

        currStock[arrStock[f]] = Number(arrStock[f + 1]);
    }

    for (let s = 0; s < arrDelivery.length; s += 2) {

        let currProduct = arrDelivery[s];

        if (!currStock.hasOwnProperty(currProduct)) {

            currStock[currProduct] = Number(arrDelivery[s + 1]);

        } else {
            currStock[currProduct] += Number(arrDelivery[s + 1]);
        }
    }

    for (const key in currStock) {
        console.log(`${key} -> ${currStock[key]}`);
    }

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]

)