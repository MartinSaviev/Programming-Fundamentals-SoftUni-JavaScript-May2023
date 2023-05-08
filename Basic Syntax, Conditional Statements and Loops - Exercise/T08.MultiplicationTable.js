function table(num) {

    for (let firstNum = 1; firstNum <= num; firstNum++) {

        for (let secondNum = 1; secondNum <= 10; secondNum++) {

            let result = num * secondNum;
            console.log(`${num} X ${secondNum} = ${result}`);

        }
        return;
    }
}