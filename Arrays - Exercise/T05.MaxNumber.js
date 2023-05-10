function maxNumber(array) {

    let maxNumberArray = [];

    for (let i = 0; i < array.length; i++) {

        let isValid = true;

        for (let z = i; z < array.length; z++) {

            if (array[i] <= array[z+1]) {

                isValid = false;
                break;
            }
        }

        if (isValid) {

            maxNumberArray.push(array[i]);
        }   
    }

    console.log(maxNumberArray.join(' '));
}