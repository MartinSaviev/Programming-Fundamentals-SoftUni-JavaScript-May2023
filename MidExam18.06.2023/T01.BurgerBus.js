function burgerBus(input) {

    let numberCities = Number(input.shift());

    let totalSum = 0;
    let momentSum = 0;

    for (let i = 1; i <= numberCities; i++) {

        let nameOfTheCity = input.shift();
        let moneyEarned = Number(input.shift());
        let ownerExpenses = Number(input.shift());

        momentSum = moneyEarned - ownerExpenses;

        if (i % 3 === 0) {
            momentSum -= ownerExpenses * 0.50;
        }

        if (i % 5 === 0) {

            moneyEarned -= moneyEarned * 0.10;
            momentSum = moneyEarned - ownerExpenses;
        }

        totalSum += momentSum;
        
        console.log(`In ${nameOfTheCity} Burger Bus earned ${momentSum.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalSum.toFixed(2)} leva.`);
}

burgerBus(["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"])