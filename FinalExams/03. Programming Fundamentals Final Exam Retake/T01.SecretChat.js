function secretChat(input) {

    let text = input.shift();

    for (const line of input) {

        if (line === 'Reveal') {
            break;
        }

        let [command, indexOrString, replaceString] = line.split(':|:')

        switch (command) {
            case 'ChangeAll':

                let oldString = indexOrString;
                let newString = replaceString;

                while (text.includes(oldString)) {

                    text = text.replace(oldString, newString);

                }

                console.log(text);
                break;

            case 'Reverse':

                let textSubstr = indexOrString;
                if (text.includes(textSubstr)) {

                    let firstIndex = text.indexOf(textSubstr);
                    let lastIndex = firstIndex + textSubstr.length;

                    let reverseText = [...textSubstr].reverse().join('');

                    let firstHalfText = text.substring(0, firstIndex);
                    let secundHalfText = text.substring(lastIndex);

                    text = firstHalfText + secundHalfText + reverseText;
                    console.log(text);

                } else {

                    console.log('error');

                }

                break;
            case 'InsertSpace':

                let insertSpace = Number(indexOrString);

                let firstHalfString = text.substring(0, insertSpace);
                let secundHalfString = text.substring(insertSpace);

                text = firstHalfString + ' ' + secundHalfString;

                console.log(text);

                break;
        }
    }
    console.log(`You have a new text message: ${text}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])