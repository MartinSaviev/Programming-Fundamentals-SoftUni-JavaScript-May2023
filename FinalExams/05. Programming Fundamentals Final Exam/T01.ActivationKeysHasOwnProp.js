function activationKeys(input) {

    let activationKey = input.shift();

    for (const line of input) {

        if (line === 'Generate') {
            break;
        }

        let [command, token, token1, token2] = line.split('>>>')

        switch (command) {
            case 'Slice':

                let startInd = Number(token);
                let lastInd = Number(token1);

                if (activationKey.hasOwnProperty(startInd) && activationKey.hasOwnProperty(lastInd)) {

                    let firstStr = activationKey.substring(0, startInd);
                    let secundStr = activationKey.substring(lastInd);
                    activationKey = firstStr + secundStr;
                    console.log(activationKey);
                }

                break;
            case 'Flip':

                let UpperOrLower = token;
                let startIndex = Number(token1);
                let endIndex = Number(token2);

                if (UpperOrLower === 'Upper') {

                    if (activationKey.hasOwnProperty(startIndex) && activationKey.hasOwnProperty(endIndex)) {

                        let firstSubstring = activationKey.substring(0, startIndex);
                        let secundSubstring = activationKey.substring(endIndex)
                        let upLetters = activationKey.substring(startIndex, endIndex).toUpperCase();

                        activationKey = firstSubstring + upLetters + secundSubstring
                        console.log(activationKey);
                    }

                } else if (UpperOrLower === 'Lower') {

                    if (activationKey.hasOwnProperty(startIndex) && activationKey.hasOwnProperty(endIndex)) {

                        let firstSubstring = activationKey.substring(0, startIndex);
                        let secundSubstring = activationKey.substring(endIndex)
                        let upLetters = activationKey.substring(startIndex, endIndex).toLowerCase();

                        activationKey = firstSubstring + upLetters + secundSubstring
                        console.log(activationKey);
                    }
                }

                break;
            case 'Contains':

                let substr = token;
                if (activationKey.includes(substr)) {

                    console.log(`${activationKey} contains ${substr}`);

                } else {
                    console.log('Substring not found!');

                }

                break;
        }
    }
    console.log(`Your activation key is: ${activationKey}`);
}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
