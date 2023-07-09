function revealWords(words, text) {

    let wordArr = words.split(', ');

    let textArr = text.split(' ');

    for (let i = 0; i < wordArr.length; i++) {

        let changeWord = wordArr[i];
        let changeWordLength = wordArr[i].length
        
        
        for (let z = 0; z < textArr.length; z++) {
            
            let currWords = textArr[z];
            let wordsLength = currWords.length;

            if (currWords.includes('*')) {

                if (changeWordLength === wordsLength) {
                    textArr[z] = changeWord;
                }
            }
        }
    }
    console.log(textArr.join(' '));

}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming ***** languages ********')

revealWords('great',
    'softuni is ***** place for learning new programming languages')