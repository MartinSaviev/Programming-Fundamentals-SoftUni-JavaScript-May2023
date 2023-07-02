function wordTracker(input) {

    let words = input.shift().split(' ');
    let repeatWordsAndCount = {};

    for (let i = 0; i < words.length; i++) {

        let searchWord = words[i];

        let wordsCount = input.filter(word => word === searchWord).length;

        repeatWordsAndCount[searchWord] = wordsCount;
    }

    let sortedWords = Object.entries(repeatWordsAndCount);
    
    sortedWords.sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])