function cutAndReverse(input) {

    let array = input.split('');
    let arrayCount = array.length/2;

    array2 = array.splice(0,arrayCount).reverse();
    array.reverse();

    console.log(array2.join(''));
    console.log(array.join(''));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')