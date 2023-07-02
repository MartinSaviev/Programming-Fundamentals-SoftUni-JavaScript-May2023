function words(input) {

    let words = {};

    for (const word of input) {
        let wordsCounter = 0;
        if (!words.hasOwnProperty(word)) {
            wordsCounter++;
            words[word] = wordsCounter;

        } else {
            wordsCounter++;
            words[word] += wordsCounter;
        }
    }

    let entries = Object.entries(words);

    entries.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (const line of entries) {

        let [name, address] = line

        console.log(`${name} -> ${address} times`);
    }

}
words(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);