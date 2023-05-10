function maxSequenceEqualElements(array) {

    let counter = 1;
    let number = 0;
    let equalElements = [];

    for (let i = 0; i < array.length; i++) {
        
        let currCounter = 1;
        let currEl = array[i];

        for (let s = i; s < array.length; s++) {

            if (currEl == array[s + 1]) {

                currCounter++;
                continue;
            }
            if (currCounter > counter) {
                counter = currCounter;
                number = currEl;
            }

            break;
        }

    }
    for (let i = 0; i < counter; i++) {
        equalElements.push(number)
    }
    console.log(equalElements.join(' '));
   
}