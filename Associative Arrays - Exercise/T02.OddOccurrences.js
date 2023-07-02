function oddOccurrences(input) {

    let words = input.toLowerCase().split(' ');

    let wordsCount = {};
    let wordsCountArray = []; 

    for (const elements of words) {

        let checkWord = elements;
        let repeatWordsAndCount = words.filter(word => word === checkWord).length;

        if (repeatWordsAndCount % 2 === 1) {
            wordsCount[checkWord] = repeatWordsAndCount;
        }
    }

    for (const words in wordsCount) {
        
        wordsCountArray.push(words);
    }

    console.log(wordsCountArray.join(' '));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')