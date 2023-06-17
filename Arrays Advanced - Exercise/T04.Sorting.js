function sorting(array) {


    let bigAndSmallNumber = [];

    for (let i = 0; i < array.length; i++) {

        let maxNumbersArray = array.sort((a, b) => b - a);
        let maxNumber = maxNumbersArray.shift();
        bigAndSmallNumber.push(maxNumber);

        let minNumbersArray = array.sort((a, b) => a - b);
        let minNumber = minNumbersArray.shift();
        bigAndSmallNumber.push(minNumber);
        i--;
        

    }
    console.log(bigAndSmallNumber.join(" "));

}