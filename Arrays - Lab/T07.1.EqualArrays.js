function equalTwoArrays(array1, array2) {

    let sum = 0;
    let index = 0;

    for (let i = 0; i < array1.length; i++) {


        if (array1[i] === array2[i]) {

            sum += Number(array1[i]);

        } else {
            index = i;
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }
    }

    if (index === 0) {

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}