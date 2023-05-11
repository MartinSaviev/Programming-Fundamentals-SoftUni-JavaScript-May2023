function palindrome(array) {

    for (let i = 0; i < array.length; i++) {

        let firstNum = array[i].toString().slice(0, 1);
        let lastNum = array[i].toString().slice(-1);

        firstNum = Number(firstNum);
        lastNum = Number(lastNum);
    
        trueOrFalse(firstNum, lastNum);
    }

    function trueOrFalse(firstNum, lastNum) {
        
        if (firstNum === lastNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}