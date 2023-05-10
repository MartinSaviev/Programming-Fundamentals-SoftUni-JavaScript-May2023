function firstAndLastElements(input) {

    let firstArr = input;

    let n = Number(firstArr.shift());
    
    let firstNumbersArr = [];
    let secondNumbersArr = [];
    let arrL = firstArr.length-n;
    // let lastIndex = -n;

    firstNumbersArr = firstArr.slice(0, n);
    secondNumbersArr = firstArr.slice(arrL,firstArr.length)


    console.log(firstNumbersArr.join(' '));
    console.log(secondNumbersArr.join(' '));

}