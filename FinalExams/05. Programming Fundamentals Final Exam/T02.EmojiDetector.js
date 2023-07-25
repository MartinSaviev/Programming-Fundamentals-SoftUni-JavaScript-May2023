function emojiDetector(input) {

    let text = input.slice()[0];

    let patternNumbers = /\d/g
    let patternEmoji = /(:{2}|\*{2})(?<nameEmoji>[A-Z][a-z]+)\1/g
    let patternEmojiFullName = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]+)\1/g

    let matchesEmojiNames = text.matchAll(patternEmoji);
    let matchesNumbers = text.match(patternNumbers).map(Number)
    let matchesEmojiFullNames = text.match(patternEmojiFullName);

    let coolThreshold = matchesNumbers.reduce((a, b) => a * b);

    let emojis = [];

    for (const match of matchesEmojiFullNames) {

        if (match.length>6) {
            
            emojis.push(match);
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
  
    let printEmoji = [];
    for (const match of matchesEmojiNames) {

        let sumEmojiName = 0;

        let name = match.groups.nameEmoji;

        for (const char of name) {

            sumEmojiName += char.charCodeAt();
        }
        if (sumEmojiName > coolThreshold) {
            
            for (let i = 0; i < emojis.length; i++) {

                let currEmoji = emojis[i].split('::')[1];
                let currEmoji1 = emojis[i].split('**')[1];

                if (currEmoji === name || currEmoji1 === name) {
                    printEmoji.push(emojis[i] );

                }
            }
        }
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    for (const emoji of printEmoji) {
        console.log(emoji);
        
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('-----');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

