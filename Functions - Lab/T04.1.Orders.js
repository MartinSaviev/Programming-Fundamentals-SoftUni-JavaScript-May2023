function orders(product, quantity) {

    switch (product) {
        case 'coffee': multiplyCoffee(); break;
        case 'water': multiplyWater(); break;
        case 'coke': multiplyCoke(); break;
        case 'snacks': multiplySnacks(); break;
    }

    function multiplyCoffee() {
        sum = quantity * 1.50
    }
    function multiplyWater() {
        sum = quantity * 1.00
    }
    function multiplyCoke() {
        sum = quantity * 1.40
    }
    function multiplySnacks() {
        sum = quantity * 2.00
    }

    return sum.toFixed(2)
}