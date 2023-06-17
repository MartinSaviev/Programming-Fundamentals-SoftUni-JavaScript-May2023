function houseParty(array) {

    let names = [];
    for (let i = 0; i < array.length; i++) {
        let splitName = array[i].split(' ');
        let notOrGoing = splitName[2];

        if (!names.includes(splitName[0])&& notOrGoing !=='not') {
              
            names.push(splitName[0]);
        }
        else if (names.includes(splitName[0]) && notOrGoing === 'not') {
            let index = names.indexOf(splitName[0]);
            names.splice(index,1)
        }

        else if (names.includes(splitName[0])) {

            console.log(`${splitName[0]} is already in the list!`);
        }
        else {
            console.log(`${splitName[0]} is not in the list!`);
        }
    }

    console.log(names.join("\n"));

}