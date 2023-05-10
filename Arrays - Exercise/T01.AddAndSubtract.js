function AddAndSubtract(array) {

    let sumArray = array.reduce((a, b) => a + b);

    for (let i = 0; i < array.length; i++) {


        if (array[i] % 2 == 0) {
            array[i] += i;
        }
        else {
            array[i] -= i;
        }
    }
    console.log(array);
    console.log(sumArray);

    let sumChangeArray = array.reduce((a, b) => a + b);
    console.log(sumChangeArray);

}