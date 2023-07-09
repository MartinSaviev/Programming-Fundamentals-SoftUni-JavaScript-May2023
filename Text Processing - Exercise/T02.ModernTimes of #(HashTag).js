function hashTag(input) {

    let inputArray = input.split(' ');

    for (const word of inputArray) {

        if (word[0] === '#' && word.length > 1) {

            let wordArr = word.split('');
            wordArr.shift();

            let wordToPrint = ''

            for (const char of wordArr) {

                if (!isNaN(char)) {

                    wordToPrint = '';
                    break;
                } else {
                    wordToPrint += char;
                }
            } if (wordToPrint.length > 0) {
                console.log(wordToPrint);
            }
        }
    }

}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')