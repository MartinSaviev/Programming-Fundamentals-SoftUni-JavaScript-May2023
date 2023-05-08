function printSum(firstNum, secondNum) {

    let totalSum = 0;

    let oneLine = '';

    for (let i = firstNum; i <= secondNum; i++) {

          totalSum += i;

        oneLine += i + " ";

        
    }
    console.log(oneLine);
    console.log(`Sum: ${totalSum}`);

}