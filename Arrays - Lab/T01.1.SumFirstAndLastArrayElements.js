function sumFirsAndLast(array) {

    let firstNum = array.slice(0, 1);
    let lastNum = array.slice(-1);
    let sum = firstNum[0] + lastNum[0];
    console.log(sum);
}