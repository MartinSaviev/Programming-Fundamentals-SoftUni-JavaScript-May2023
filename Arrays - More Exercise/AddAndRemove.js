function addAndRemove(input) {

    let numbersArray = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'add') {

            numbersArray.push(i + 1);

        } else {

            numbersArray.pop();
        }
    }

    if (numbersArray.length > 0) {
        console.log(numbersArray.join(' '));
    }else{
        console.log('Empty');
        
    }

}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
