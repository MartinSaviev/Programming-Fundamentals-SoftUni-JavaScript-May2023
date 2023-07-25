function TheImitationGame(input) {

    let text = input.shift();

    for (const line of input) {

        if (line === 'Decode') {
            break;
        }

        let [command, token, value] = line.split('|');

        switch (command) {
            case 'Move':
                let numberOfLetters = Number(token);

                for (let i = 0; i < numberOfLetters; i++) {

                    let firstLetter = text.substring(0, 1)
                    let otherLetters = text.substring(1);
                    text = otherLetters + firstLetter;

                }

                break;
            case 'ChangeAll':
                let oldText = token;
                let newText = value;

                while (text.includes(oldText)) {

                    text = text.replace(oldText, newText)
                }

                break;
            case 'Insert':

                let index = Number(token);
                let insertLetter = value;

                // text = text.split('');
                // text.splice(index, 0, insertLetter).join('');
                // text = text.join('')

                text = text.substring(0, index) + insertLetter + text.substring(index);
               
                break;
        }

    }
    
    console.log(`The decrypted message is: ${text}`);

}

TheImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])