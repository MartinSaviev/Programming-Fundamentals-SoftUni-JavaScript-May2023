function countString(text, word) {

    let newText = text.split(' ');

    let repeatWord = newText.filter(el => el === word).length;

    console.log(repeatWord);

}
countString('This is a word and it also is a sentence',
    'is'
)