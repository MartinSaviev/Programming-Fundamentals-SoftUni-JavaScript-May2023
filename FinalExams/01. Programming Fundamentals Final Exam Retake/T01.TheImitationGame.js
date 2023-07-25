function game(input) {

    let message = input.shift();

    for (const line of input) {

        if (line === 'Decode') {
            break;
        }

        let [command, numberIndexSubstring, value] = line.split('|');

        switch (command) {
            case 'ChangeAll':

                let oldLetter = numberIndexSubstring;
                let newLetter = value;

                while (message.includes(oldLetter)) {
                    message = message.replace(oldLetter, newLetter);
                }

                break;
            case 'Move':

                let moveLetter = Number(numberIndexSubstring);

                message = [...message]
                let firstLetters = message.splice(0, moveLetter);
                message = message.concat(firstLetters);
                message = message.join('');

                break;
            case 'Insert':

                message = [...message]
                let index = Number(numberIndexSubstring);

                message.splice(index, 0, value)
                message = message.join('');

                break;
        }
    }
    console.log(`The decrypted message is: ${message}`);

}

game([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

game([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
]);