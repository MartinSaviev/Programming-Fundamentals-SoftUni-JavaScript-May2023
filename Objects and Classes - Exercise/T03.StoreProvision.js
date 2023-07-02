function storeProvision(array, array2) {

    let allProducts = array.concat(array2);

    let totalPriceAndProduct = [];

    let currProduct = '';
    let price = 0;

    for (let i = 0; i < allProducts.length; i++) {

        currProduct = allProducts[i];
        price = Number(allProducts[i + 1])
        i++;

        if (!totalPriceAndProduct.includes(currProduct)) {

            totalPriceAndProduct.push(currProduct);
            totalPriceAndProduct.push(price);

        }
        else if (totalPriceAndProduct.includes(currProduct)) {

            let index = totalPriceAndProduct.indexOf(currProduct);

            let priceProductArray = totalPriceAndProduct[index + 1];
            totalPriceAndProduct[index + 1] = priceProductArray + price;

        }
    }

    for (let i = 0; i < totalPriceAndProduct.length; i++) {

        let productName = totalPriceAndProduct[i];
        let productPrice = totalPriceAndProduct[i + 1];
        i++;

        console.log(`${productName} -> ${productPrice}`);

    }  
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])
