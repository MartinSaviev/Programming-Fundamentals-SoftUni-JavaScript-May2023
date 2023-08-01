function decryptingCommands(input) {

    let massage = input.shift();

    for (const line of input) {

        if (line === 'Finish') {
            break;
        }

        let [command, token, token1] = line.split(' ');

        switch (command) {
            case 'Replace':
                let oldString = token;
                let newString = token1;

                while (massage.includes(oldString)) {
                    massage = massage.replace(oldString, newString);
                }
                console.log(massage);
                break;
            case 'Make':

                let upperOrLower = token;

                if (upperOrLower === 'Upper') {

                    massage = massage.toUpperCase()
                    console.log(massage);

                } else {
                    massage = massage.toLowerCase()
                    console.log(massage);
                }

                break;
            case 'Check':

                let contains = token;

                if (massage.includes(contains)) {

                    console.log(`Message contains ${contains}`);

                } else {
                    console.log(`Message doesn't contain ${massage}`);

                }
                break;
                
            case 'Sum':

                let sumStartIndex = Number(token);
                let sumEndIndex = Number(token1);

                if (massage.hasOwnProperty(sumStartIndex) && massage.hasOwnProperty(sumEndIndex)) {

                    massage = massage.split('');
                    let text = massage.slice(sumStartIndex, sumEndIndex + 1);
                    let sum = 0;
                    for (let i = 0; i < text.length; i++) {

                        let currChar = text[i].charCodeAt()
                        sum += currChar;
                    }

                    console.log(sum);
                    massage = massage.join('')



                } else {

                    console.log('Invalid indices!');

                }

                break;
            case 'Cut':

                let startIndex = Number(token);
                let endIndexInput = Number(token1);
                let endIndex = startIndex + endIndexInput;

                if (massage.hasOwnProperty(startIndex) && massage.hasOwnProperty(endIndex)) {

                    massage = massage.substring(0, startIndex) + massage.substring(endIndex)

                    console.log(massage);

                } else {
                    console.log('Invalid indices!');

                }
                break;
        }
    }
}

decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])

    console.log('-----');
    
decryptingCommands(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"]
)
