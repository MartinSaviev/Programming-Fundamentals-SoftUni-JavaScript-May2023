function passwordReset(input) {

    let text = input.shift();

    for (const line of input) {

        if (line === 'Done') {

            console.log(`Your password is: ${text}`);
            break;

        }

        let [command, index, value] = line.split(' ');

        switch (command) {
            case 'TakeOdd':

                text = [...text];
                text = text.filter((el, index) => index % 2 === 1).join('');
                console.log(text);

                break;
            case 'Cut':

                let firstIndex = Number(index);
                let secondIndex = Number(value);
                let end = firstIndex + secondIndex;

                let cut = text.slice(firstIndex, end);
                text = text.replace(cut, '');
                console.log(text);

                break;
            case 'Substitute':

                let oldText = index;
                let newText = value;

                if (text.includes(oldText)) {

                    while (text.includes(oldText)) {

                        text = text.replace(oldText, newText);

                    }
                    console.log(text);
                }
                else {
                    console.log('Nothing to replace!');
                }

                break;
        }
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

    console.log('-------------');
    
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])