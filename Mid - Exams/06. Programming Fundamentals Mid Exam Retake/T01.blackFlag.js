function pirates(input) {

    let daysOfPlunder = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let sumPlunder = 0;

    for (let i = 1; i <= daysOfPlunder; i++) {

        sumPlunder += dailyPlunder;

        if (i % 3 === 0) {

            sumPlunder += dailyPlunder * 0.50;

        }
        if (i % 5 === 0) {

            sumPlunder -= sumPlunder * 0.30;

        }
        
    }

    let percentage = sumPlunder / expectedPlunder * 100;

    if (expectedPlunder <= sumPlunder) {

        console.log(`"Ahoy! ${sumPlunder.toFixed(2)} plunder gained."`);

    } else {

        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);

    }
}

pirates(["10",
    "20",
    "380"])
