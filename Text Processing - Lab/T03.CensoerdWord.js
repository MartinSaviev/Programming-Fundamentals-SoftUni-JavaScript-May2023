function censoredWord(text, word) {

    while (text != word) {

        text = text.replace(word, ('*').repeat(word.length));

        if (!text.includes(word)) {
            break;
        }
    }

    console.log(text);
}

censoredWord('A small sentence with small some words',
    'small'
)