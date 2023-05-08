function oddNumbersSum(numbers) {

    let maxNum = 1;
    let sumNumbers = 0;
    let count = 0;

    for (let i = numbers; i >= 0; i--) {

        if (count === numbers) {

            break;
        }
        
        if (maxNum % 2 == 1) {

            sumNumbers += maxNum;

            console.log(maxNum);
            count++;

        }
        maxNum++;
        i++

    }
    console.log(`Sum: ${sumNumbers}`);
}