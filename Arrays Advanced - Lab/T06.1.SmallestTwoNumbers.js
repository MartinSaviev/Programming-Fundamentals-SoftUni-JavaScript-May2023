function SmallestTwoNumbers(array) {

    let smallNumbers = array.sort((a, b) => a - b).slice(0, 2);
    console.log(smallNumbers.join(' '));

}