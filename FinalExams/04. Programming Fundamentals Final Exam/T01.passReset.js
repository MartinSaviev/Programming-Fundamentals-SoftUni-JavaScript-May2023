function resetPass(input) {

    let password = input.shift();

    for (const line of input) {

        if (line === 'Done') {
            break;
        }
        let [command, token, token1] = line.split(' ');

        switch (command) {
            case 'TakeOdd':

                password = password.split('').filter((a, index) => index % 2 == 1).join('')

                console.log(password);

                break;
            case 'Cut':
                let startIndex = Number(token);
                let endIndex = Number(token1);

                let fistCutString = password.substring(0, startIndex);
                let secundCutString = password.substring(startIndex + endIndex);

                password = fistCutString + secundCutString;

                console.log(password);
                break;
            case 'Substitute':
                let oldString = token;
                let newString = token1;

                if (password.includes(oldString)) {

                    while (password.includes(oldString)) {

                        password = password.replace(oldString,newString)
                    }

                    console.log(password);
                } else {

                    console.log('Nothing to replace!');

                }

                break;
        }
    }

    console.log(`Your password is: ${password}`);

}

resetPass(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

