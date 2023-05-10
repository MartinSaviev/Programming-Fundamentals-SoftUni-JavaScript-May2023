function magicSum(array, magicNum) {

    let pairsNumber = [];

    for (let i = 0; i < array.length; i++) {

        let currEl = array[i];

        let currSum = 0;
        for (let a = i; a < array.length; a++) {

            currSum = currEl + array[a + 1];

            if (magicNum === currSum) {

                pairsNumber.push([currEl, array[a + 1]])

                break;
            }
        }

    }
    for (let z = 0; z < pairsNumber.length; z++) {

        console.log(pairsNumber[z].join(" "));

    }
}