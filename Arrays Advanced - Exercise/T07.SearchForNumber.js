function SearchNumber(arr1, arr2) {

    let el = arr2.shift();
    let del = arr2.shift();
    let searchNumber = arr2.shift();

    let takeElements = arr1.splice(0, el);
    takeElements.splice(0, del);

    let counter = 0;
    for (let i = 0; i < takeElements.length; i++) {

        if (searchNumber === takeElements[i]) {
            counter++;
        }
    }

    console.log(`Number ${searchNumber} occurs ${counter} times.`);

}