function substring(word, startIndex, endIndex) {

    let count = startIndex+endIndex
    let newWord = word.substring(startIndex, count);

    console.log(newWord);

}
substring('ASentence', 1, 8)
substring('SkipWord', 4, 7)