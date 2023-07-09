function revealWords(words, text) {

    let wordArr = words.split(', ');

    while (text.includes('*')) {

        for (const word of wordArr) {
    
            let wordFromStars = '*'.repeat(word.length)
    
            text = text.replace(wordFromStars, word);
        }
    }

    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new *****  ******** programming ***** languages ********')

revealWords('great',
    'softuni is ***** place for learning new programming languages')