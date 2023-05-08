function month(numberMonth) {

    let arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

   
    if (arrMonth[numberMonth - 1]) {

        console.log(arrMonth[numberMonth - 1]);
    } else {
        console.log('Error!');

    }
}