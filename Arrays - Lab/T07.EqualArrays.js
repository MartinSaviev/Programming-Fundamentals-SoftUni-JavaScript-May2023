function equalArray(arr1, arr2) {

    let firstArray = arr1.map(Number);
    let secondArray = arr2.map(Number);
    let wrongIndex = [];
    let isValid = true;
    for (let i = 0; i < firstArray.length; i++) {

        if (firstArray[i] !== secondArray[i]) {
            wrongIndex.push(i);
            isValid = false;
            break;
        }

    }
    if (wrongIndex >= 0 && isValid === false) {
        console.log(`Arrays are not identical. Found difference at ${wrongIndex} index`);
    } else {
        let sumArray = firstArray.reduce((a, b) => a + b);
        console.log(`Arrays are identical. Sum: ${sumArray}`);

    }


}